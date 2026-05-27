"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaTrash,
  FaGithub,
  FaExternalLinkAlt,
  FaImage,
  FaPlus,
  FaEdit,
  FaFolderOpen,
  FaCertificate,
} from "react-icons/fa";

export default function DashboardPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"projects" | "certificates">(
    "projects",
  );

  /* =========================
      PROJECT STATE
  ========================= */
  const [projects, setProjects] = useState<any[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [technologies, setTechnologies] = useState("");

  const [editingProject, setEditingProject] = useState<any>(null);

  const [uploadingProject, setUploadingProject] = useState(false);

  /* =========================
      CERTIFICATE STATE
  ========================= */
  const [certificates, setCertificates] = useState<any[]>([]);

  const [certTitle, setCertTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [year, setYear] = useState("");
  const [certImage, setCertImage] = useState("");

  const [uploadingCert, setUploadingCert] = useState(false);

  /* =========================
      AUTH
  ========================= */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    }

    fetchProjects();
    fetchCertificates();
  }, []);

  /* =========================
      FETCH PROJECTS
  ========================= */
  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");

      const data = await res.json();

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
      FETCH CERTIFICATES
  ========================= */
  const fetchCertificates = async () => {
    try {
      const res = await fetch("/api/certificates");

      const data = await res.json();

      setCertificates(data);
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
      UPLOAD PROJECT IMAGE
  ========================= */
  const uploadProjectImage = async (e: any) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploadingProject(true);

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", "portfolio_unsigned");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dye7vauxw/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      setImage(data.secure_url);
    } catch (error) {
      console.log(error);
    } finally {
      setUploadingProject(false);
    }
  };

  /* =========================
      UPLOAD CERTIFICATE IMAGE
  ========================= */
  const uploadCertificateImage = async (e: any) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploadingCert(true);

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", "portfolio_unsigned");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dye7vauxw/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      setCertImage(data.secure_url);
    } catch (error) {
      console.log(error);
    } finally {
      setUploadingCert(false);
    }
  };

  /* =========================
      RESET FORM
  ========================= */
  const resetProjectForm = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setGithub("");
    setLiveUrl("");
    setTechnologies("");
  };

  /* =========================
      ADD PROJECT
  ========================= */
  const addProject = async () => {
    try {
      await fetch("/api/projects", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description,
          image,
          github,
          liveUrl,
          technologies: technologies.split(",").map((tech) => tech.trim()),
        }),
      });

      resetProjectForm();

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
      UPDATE PROJECT
  ========================= */
  const updateProject = async () => {
    if (!editingProject) return;

    try {
      await fetch(`/api/projects/${editingProject._id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description,
          image,
          github,
          liveUrl,
          technologies: technologies.split(",").map((tech) => tech.trim()),
        }),
      });

      setEditingProject(null);

      resetProjectForm();

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
      DELETE PROJECT
  ========================= */
  const deleteProject = async (id: string) => {
    const confirmDelete = confirm("Delete this project?");

    if (!confirmDelete) return;

    try {
      await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
      ADD CERTIFICATE
  ========================= */
  const addCertificate = async () => {
    try {
      await fetch("/api/certificates", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: certTitle,
          issuer,
          year,
          image: certImage,
        }),
      });

      setCertTitle("");
      setIssuer("");
      setYear("");
      setCertImage("");

      fetchCertificates();
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
      DELETE CERTIFICATE
  ========================= */
  const deleteCertificate = async (id: string) => {
    const confirmDelete = confirm("Delete this certificate?");

    if (!confirmDelete) return;

    try {
      await fetch(`/api/certificates/${id}`, {
        method: "DELETE",
      });

      fetchCertificates();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#0f172a] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-400">
              Portfolio CMS
            </p>

            <h1 className="text-3xl font-bold md:text-4xl">Admin Dashboard</h1>

            <p className="mt-2 text-sm text-white/50">
              Manage projects & certificates
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/admin/login");
            }}
            className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* TAB */}
        <div className="mb-8 flex gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
              activeTab === "projects"
                ? "bg-cyan-400 text-black"
                : "border border-white/10 bg-[#0f172a] text-white/70"
            }`}
          >
            <FaFolderOpen />
            Projects
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
              activeTab === "certificates"
                ? "bg-cyan-400 text-black"
                : "border border-white/10 bg-[#0f172a] text-white/70"
            }`}
          >
            <FaCertificate />
            Certificates
          </button>
        </div>

        {/* =========================
            PROJECTS
        ========================= */}
        {activeTab === "projects" && (
          <>
            {/* FORM */}
            <div className="mb-8 rounded-3xl border border-white/10 bg-[#0f172a] p-6">
              <h2 className="mb-5 text-2xl font-bold">
                {editingProject ? "Edit Project" : "Add Project"}
              </h2>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <textarea
                  placeholder="Project Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                {/* UPLOAD */}
                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-cyan-400/30 bg-cyan-400/10 px-4 py-5 text-cyan-300 transition hover:bg-cyan-400/20">
                  <FaImage />

                  <span className="text-sm">
                    {uploadingProject ? "Uploading..." : "Upload Project Image"}
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={uploadProjectImage}
                  />
                </label>

                {image && (
                  <img
                    src={image}
                    alt="Preview"
                    className="h-[180px] w-full rounded-xl object-cover"
                  />
                )}

                <input
                  type="text"
                  placeholder="Github URL"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Live Demo URL"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Technologies (Next.js, Tailwind)"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <button
                  type="button"
                  onClick={editingProject ? updateProject : addProject}
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  <FaPlus />

                  {editingProject ? "Update Project" : "Add Project"}
                </button>
              </div>
            </div>

            {/* PROJECT LIST */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]"
                >
                  {/* IMAGE */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[170px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[170px] items-center justify-center bg-white/5 text-sm text-white/40">
                      No Image
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-5">
                    <h2 className="line-clamp-1 text-lg font-bold">
                      {project.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/60">
                      {project.description}
                    </p>

                    {/* TECH */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-300"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>

                    {/* LINKS */}
                    <div className="mt-4 flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="rounded-lg bg-white/5 p-3 transition hover:bg-white/10"
                        >
                          <FaGithub />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="rounded-lg bg-cyan-400 p-3 text-black transition hover:bg-cyan-300"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>

                    {/* ACTION */}
                    <div className="mt-5 flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingProject(project);

                          setTitle(project.title);
                          setDescription(project.description);
                          setImage(project.image);
                          setGithub(project.github);
                          setLiveUrl(project.liveUrl);

                          setTechnologies(
                            project.technologies?.join(", ") || "",
                          );

                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="flex items-center gap-2 rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
                      >
                        <FaEdit />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteProject(project._id)}
                        className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold transition hover:bg-red-600"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* =========================
            CERTIFICATES
        ========================= */}
        {activeTab === "certificates" && (
          <>
            {/* FORM */}
            <div className="mb-8 rounded-3xl border border-white/10 bg-[#0f172a] p-6">
              <h2 className="mb-5 text-2xl font-bold">Add Certificate</h2>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Certificate Title"
                  value={certTitle}
                  onChange={(e) => setCertTitle(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Issuer"
                  value={issuer}
                  onChange={(e) => setIssuer(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                {/* UPLOAD */}
                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-purple-400/30 bg-purple-400/10 px-4 py-5 text-purple-300 transition hover:bg-purple-400/20">
                  <FaImage />

                  <span className="text-sm">
                    {uploadingCert ? "Uploading..." : "Upload Certificate"}
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={uploadCertificateImage}
                  />
                </label>

                {certImage && (
                  <img
                    src={certImage}
                    alt="Preview"
                    className="h-[180px] w-full rounded-xl object-cover"
                  />
                )}

                <button
                  type="button"
                  onClick={addCertificate}
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  <FaPlus />
                  Add Certificate
                </button>
              </div>
            </div>

            {/* CERTIFICATE LIST */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {certificates.map((certificate) => (
                <div
                  key={certificate._id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]"
                >
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-[170px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[170px] items-center justify-center bg-white/5 text-sm text-white/40">
                      No Image
                    </div>
                  )}

                  <div className="p-5">
                    <h2 className="line-clamp-1 text-lg font-bold">
                      {certificate.title}
                    </h2>

                    <p className="mt-2 text-sm text-white/60">
                      {certificate.issuer}
                    </p>

                    <p className="mt-1 text-sm text-cyan-400">
                      {certificate.year}
                    </p>

                    <button
                      type="button"
                      onClick={() => deleteCertificate(certificate._id)}
                      className="mt-5 flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold transition hover:bg-red-600"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

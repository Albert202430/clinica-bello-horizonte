// app/blog/[slug]/page.tsx
"use client";
import { useState, useEffect, use } from "react"; // Importamos 'use' de React
import { blogPosts } from "@/app/blog/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link2,
  Eye,
  Bookmark
} from "lucide-react";
import LikeButton from "@/app/blog/LikeButton";
import { notFound } from "next/navigation";

// Definir el tipo de los props
type PageProps = {
  params: Promise<{ slug: string }>; // Importante: params es una Promise
};

export default function ArticuloPage({ params }: PageProps) {
  // ✅ CORRECCIÓN: Usamos React.use() para resolver la Promise
  const { slug } = use(params);
  
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  // Ahora podemos usar slug directamente
  const post = blogPosts.find((p) => p.slug === slug);
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Artículos relacionados (excluir el actual)
  const relacionados = blogPosts
    .filter((p) => p.slug !== slug) // Usamos slug aquí también
    .slice(0, 3);

  // Tiempo de lectura estimado
  const tiempoLectura = post ? Math.ceil(post.excerpt.split(" ").length / 200) + 3 : 0;

  // Verificar si el artículo está guardado
  useEffect(() => {
    if (!post) return;
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "{}");
    setIsSaved(!!savedPosts[post.id]);
  }, [post]);

  const toggleSave = () => {
    if (!post) return;
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "{}");
    if (!isSaved) {
      savedPosts[post.id] = true;
      localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
    } else {
      delete savedPosts[post.id];
      localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
    }
    setIsSaved(!isSaved);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section con Parallax */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Imagen de fondo con efecto parallax */}
        <motion.div 
          style={{ scale }}
          className="absolute inset-0"
        >
          <Image
            src={post.imagen}
            alt={post.titulo}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </motion.div>

        {/* Barra de progreso de lectura */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />

        {/* Contenido del hero */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 flex items-end"
        >
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 pb-20 text-white">
            {/* Botón volver */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Volver al Blog
            </Link>

            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Calendar size={14} />
                {post.fecha}
              </span>
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <User size={14} />
                {post.autor}
              </span>
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Clock size={14} />
                {tiempoLectura} min lectura
              </span>
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Eye size={14} />
                {Math.floor(post.likes * 2.5)} vistas
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
              {post.titulo}
            </h1>

            {/* Extracto */}
            <p className="text-xl text-white/90 max-w-2xl italic border-l-4 border-[#10b5c5] pl-6">
              {post.excerpt}
            </p>
          </div>
        </motion.div>

        {/* Onda inferior */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path
              d="M0 120L60 105C120 90 240 60 360 48C480 36 600 42 720 54C840 66 960 84 1080 90C1200 96 1320 90 1380 87L1440 84V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* El resto del contenido se mantiene igual... */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Barra de acciones flotante */}
        <div className="sticky top-24 z-40 flex justify-end mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-2 border border-gray-100"
          >
            {/* Botón Like */}
            <LikeButton postId={post.id} initialLikes={post.likes} />

            {/* Botón Guardar */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSave}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: isSaved 
                  ? "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" 
                  : "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
              }}
            >
              <Bookmark
                size={18}
                className={isSaved ? "fill-yellow-600 text-yellow-600" : "text-gray-600"}
              />
              <span className={isSaved ? "text-yellow-800" : "text-gray-600"}>
                {isSaved ? "Guardado" : "Guardar"}
              </span>
            </motion.button>

            {/* Botón Compartir */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0173BC] to-[#10b5c5] text-white flex items-center gap-2"
              >
                <Share2 size={18} />
                Compartir
              </motion.button>

              {/* Menú de compartir */}
              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full mb-2 right-0 bg-white rounded-xl shadow-2xl p-2 min-w-[200px] border border-gray-100"
                >
                  <button
                    onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Facebook size={18} className="text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Twitter size={18} className="text-sky-500" />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={() => window.open(`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Linkedin size={18} className="text-blue-700" />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                      alert("¡Enlace copiado!");
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Link2 size={18} className="text-gray-600" />
                    <span>Copiar enlace</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* El resto del contenido del artículo se mantiene igual... */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#0173BC] first-letter:mr-3 first-letter:float-left">
            {post.excerpt}
          </p>

          

          <blockquote className="border-l-4 border-[#10b5c5] pl-6 italic text-gray-700 my-8 text-lg bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-r-2xl">
            "La prevención es la mejor medicina. Cuidar nuestra salud hoy es la inversión más importante para nuestro futuro."
          </blockquote>

          

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Beneficios principales</h2>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-600">Mejora la calidad de vida y el bienestar general</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-600">Reduce el riesgo de enfermedades crónicas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-600">Aumenta la energía y la productividad diaria</span>
            </li>
          </ul>
        </div>

        {/* Sección de autor */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {post.autor.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{post.autor}</h3>
              <p className="text-sm text-gray-500">Especialista en Salud y Bienestar</p>
              <p className="text-sm text-gray-600 mt-2">
                Artículo verificado por el equipo médico de Clínica Bello Horizonte
              </p>
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Artículos relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relacionados.map((rel, index) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={rel.imagen}
                        alt={rel.titulo}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="text-xs text-white/80 flex items-center gap-1">
                          <Clock size={10} />
                          {Math.ceil(rel.excerpt.split(" ").length / 200) + 2} min
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-[#0173BC] transition-colors line-clamp-2">
                      {rel.titulo}
                    </h4>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Llamado a la acción */}
        <div className="mt-16 text-center">
          <Link href="/cita">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#0173BC] to-[#10b5c5] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              ¿Necesitas una consulta? Reserva tu cita
            </motion.button>
          </Link>
        </div>
      </article>
    </main>
  );
}
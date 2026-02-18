export default function DoctorCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col animate-pulse border border-gray-100">
      
      {/* Skeleton de la Imagen de Perfil */}
      <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 shadow-inner" />

      {/* Skeleton del Nombre */}
      <div className="h-5 bg-gray-300 rounded-full w-3/4 mx-auto mb-3" />

      {/* Skeleton de la Especialidad */}
      <div className="h-4 bg-blue-100 rounded-full w-1/2 mx-auto mb-6" />

      {/* Skeleton de la Descripción */}
      <div className="space-y-3 mb-6 flex-grow">
        <div className="h-3 bg-gray-100 rounded-full w-full" />
        <div className="h-3 bg-gray-100 rounded-full w-full" />
        <div className="h-3 bg-gray-100 rounded-full w-4/5 mx-auto" />
      </div>

      {/* Skeleton del Botón (Ancho completo para evitar saltos visuales) */}
      <div className="h-10 bg-gray-200 rounded-xl w-full mt-auto" />
    </div>
  );
}
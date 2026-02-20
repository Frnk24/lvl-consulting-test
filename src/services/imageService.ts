// src/services/imageService.ts

// --- CONFIGURACIÓN DE CLOUDINARY ---
// Nota: En producción, esto iría en variables de entorno (.env),
// pero para la prueba lo dejamos aquí para facilitar la revisión.
const CLOUD_NAME = "dwsduumzv";
const UPLOAD_PRESET = "wlf9qcww";

/**
 * Genera una URL de imagen aleatoria usando Picsum
 * @param id - Identificador único para obtener siempre la misma imagen
 * @param width - Ancho deseado
 * @param height - Alto deseado
 */
export const getPicsumUrl = (id: number, width: number = 40, height: number = 40): string => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};

/**
 * Sube un archivo a Cloudinary y retorna la URL segura
 * @param file - El archivo (File) seleccionado por el usuario
 */
export const uploadToCloudinary = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error en la respuesta de Cloudinary");
    }

    const data = await response.json();
    return data.secure_url; // Retorna la URL de la imagen
  } catch (error) {
    console.error("Error subiendo imagen:", error);
    return null;
  }
};
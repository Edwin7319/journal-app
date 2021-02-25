export default async function fileUpload(file) {

    const CLOUD_URL = 'https://api.cloudinary.com/v1_1/deiukfno8/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(CLOUD_URL, {
            method: 'POST',
            body: formData,
        });

        if (!resp.ok) {
            throw await resp.json();
        }

        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (e) {
        console.error({
            mensaje: 'Error al subir el archivo',
            error: e,
        })
    }
}
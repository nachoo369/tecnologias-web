function pdf() {
    const fileUploadInput = document.getElementById("pdf-upload");
    const fileStatus = document.getElementById("file-status");

    if (fileUploadInput.files.length === 0) {
        fileStatus.textContent = "No hay archivos seleccionados";
    } else {
        let fileNames = [];
        for (let i = 0; i < fileUploadInput.files.length; i++) {
            fileNames.push(fileUploadInput.files[i].name);
        }
        fileStatus.textContent = "Archivos seleccionados: " + fileNames.join(", ");
    }
}

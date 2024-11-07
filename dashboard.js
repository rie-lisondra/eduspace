// Check if there are any subjects or files
document.addEventListener('DOMContentLoaded', function () {
    const subjects = []; // Add subjects here
    const openFiles = []; // Add open files here
    const downloadFiles = []; // Add download files here

    // Handle the subjects list
    const subjectsList = document.getElementById('subjectsList');
    const noSubjectsMessage = document.getElementById('noSubjectsMessage');

    if (subjects.length === 0) {
        subjectsList.style.display = 'none';
        noSubjectsMessage.classList.remove('hidden');
    } else {
        noSubjectsMessage.classList.add('hidden');
        subjects.forEach(subject => {
            const subjectCard = document.createElement('div');
            subjectCard.classList.add('bg-white', 'h-48', 'p-4', 'rounded-lg', 'shadow-lg', 'border', 'border-blue-200');
            subjectCard.innerHTML = `
                <h3 class="text-lg font-semibold text-blue-700">${subject.name}</h3>
                <p class="text-gray-600">${subject.grade} - ${subject.section}</p>
                <p class="text-gray-600">${subject.teacher}</p>
            `;
            subjectsList.appendChild(subjectCard);
        });
    }

    // Handle the open files list
    const openFilesList = document.getElementById('openFilesList');
    const noOpenFilesMessage = document.getElementById('noOpenFilesMessage');

    if (openFiles.length === 0) {
        openFilesList.style.display = 'none';
        noOpenFilesMessage.classList.remove('hidden');
    } else {
        noOpenFilesMessage.classList.add('hidden');
        openFiles.forEach(file => {
            const listItem = document.createElement('li');
            listItem.classList.add('border-b', 'py-2');
            listItem.textContent = file.name;
            openFilesList.appendChild(listItem);
        });
    }

    // Handle the download files list
    const downloadFilesList = document.getElementById('downloadFilesList');
    const noDownloadFilesMessage = document.getElementById('noDownloadFilesMessage');

    if (downloadFiles.length === 0) {
        downloadFilesList.style.display = 'none';
        noDownloadFilesMessage.classList.remove('hidden');
    } else {
        noDownloadFilesMessage.classList.add('hidden');
        downloadFiles.forEach(file => {
            const listItem = document.createElement('li');
            listItem.classList.add('border-b', 'py-2');
            listItem.textContent = file.name;
            downloadFilesList.appendChild(listItem);
        });
    }
});

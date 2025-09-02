document.addEventListener("DOMContentLoaded", function () {
  // DATA PERTANYAAN DENGAN TIPE MINDSET
  const questionsData = [
    {
      id: "q1",
      question:
        "Kemampuan Anda adalah sesuatu yang sangat mendasar yang tidak banyak dapat Anda ubah lagi.",
      type: "fixed",
    },
    {
      id: "q2",
      question:
        "Tidak peduli seberapapun tingkat kemampuan Anda saat ini, Anda bisa mengubahnya walaupun sedikit.",
      type: "growth",
    },
    {
      id: "q3",
      question: "Anda akan selalu dapat mengubah kemampuan Anda.",
      type: "growth",
    },
    {
      id: "q4",
      question:
        "Anda adalah seseorang yang unik, tidak banyak yang dapat dilakukan untuk mengubahnya.",
      type: "fixed",
    },
    {
      id: "q5",
      question: "Anda akan selalu dapat mengubah diri Anda sendiri.",
      type: "growth",
    },
    {
      id: "q6",
      question:
        "Kemampuan dalam bidang seni dan musik dapat dipelajari oleh siapapun.",
      type: "growth",
    },
    {
      id: "q7",
      question:
        "Hanya sedikit orang yang benar-benar mahir dalam olahraga, Anda harus membawa bakat ini sejak lahir.",
      type: "fixed",
    },
    {
      id: "q8",
      question:
        "Matematika lebih mudah dipelajari oleh pria atau seseorang yang berada dalam lingkungan yang menyukainya.",
      type: "fixed",
    },
    {
      id: "q9",
      question:
        "Makin keras Anda mengerjakan sesuatu makin mahir Anda dalam hal ini.",
      type: "growth",
    },
    {
      id: "q10",
      question:
        "Tidak peduli tipe apapun Anda saat ini, Anda akan selalu dapat mengubahnya.",
      type: "growth",
    },
    {
      id: "q11",
      question:
        "Mencoba sesuatu yang baru akan sangat menyulitkan Anda sehingga Anda ingin menghindarinya.",
      type: "fixed",
    },
    {
      id: "q12",
      question:
        "Sebagian orang baik dan pintar, sebagian lagi tidak. Tidak banyak yang dapat berubah.",
      type: "fixed",
    },
    {
      id: "q13",
      question:
        "Saya sangat menghargai kritik dan saran dari siapapun juga terkait dengan kinerja saya saat ini.",
      type: "growth",
    },
    {
      id: "q14",
      question: "Saya kurang senang bila ada kritik dan saran dari orang lain.",
      type: "fixed",
    },
    {
      id: "q15",
      question:
        "Semua orang yang tanpa cacat-otak atau cacat-lahir memiliki kemampuan yang sama dalam belajar.",
      type: "growth",
    },
    {
      id: "q16",
      question:
        "Anda bisa mempelajari sesuatu yang baru, tapi Anda tidak bisa mengubah kemampuan Anda.",
      type: "fixed",
    },
    {
      id: "q17",
      question:
        "Anda dapat melakukan sesuatu secara berbeda, tapi sebenarnya Anda tetap tidak dapat mengubah kemampuan Anda.",
      type: "fixed",
    },
    {
      id: "q18",
      question:
        "Semua orang pada dasarnya baik, tapi kadang-kadang membuat keputusan yang salah.",
      type: "growth",
    },
    {
      id: "q19",
      question:
        "Alasan terpenting mengapa Anda melakukan pekerjaan Anda adalah keinginan untuk mempelajari sesuatu yang baru.",
      type: "growth",
    },
    {
      id: "q20",
      question: "Orang yang benar-benar cerdas, tidak perlu bekerja keras.",
      type: "fixed",
    },
  ];

  const answerOptions = [
    "Sangat Tidak Setuju",
    "Tidak Setuju",
    "Netral",
    "Setuju",
    "Sangat Setuju",
  ];

  const scoreMap = {
    growth: [0, 1, 2, 3, 3], // Skor untuk [Sangat Tidak Setuju, Tidak Setuju, Netral, Setuju, Sangat Setuju]
    fixed: [3, 3, 2, 1, 0], // Skor terbalik
  };

  const questionnaireContainer = document.getElementById(
    "questionnaire-container"
  );

  // GENERATE KARTU PERTANYAAN
  questionsData.forEach((questionItem, index) => {
    const currentScores = scoreMap[questionItem.type];
    const optionsHTML = answerOptions
      .map((option, optionIndex) => {
        const scoreValue = currentScores[optionIndex];
        return `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${questionItem.id}" id="${questionItem.id}-opt${optionIndex}" value="${scoreValue}">
                    <label class="form-check-label" for="${questionItem.id}-opt${optionIndex}">${option}</label>
                </div>
            `;
      })
      .join("");

    // Menambahkan kelas 'card-layered-shadow' di sini
    const questionCardHTML = `
            <div class="card mb-4 card-layered-shadow">
                <div class="card-body p-4">
                    <p class="fw-bold mb-3">${index + 1}. ${
      questionItem.question
    }</p>
                    ${optionsHTML}
                </div>
            </div>`;
    questionnaireContainer.innerHTML += questionCardHTML;
  });

  // FUNGSI SAAT TOMBOL SUBMIT DI-KLIK
  const submitBtn = document.getElementById("submit-btn");
  const resultContainer = document.getElementById("result-container");

  submitBtn.addEventListener("click", function () {
    // 1. Ambil URL Web App yang sudah Anda deploy
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw09_l6ywPjsRWum9JAgdMCG3nhc5MhXDE1ciSs9V9mUV0lhzRoM6gMP16IwTKL8u-dIA/exec"; // 👈 GANTI DENGAN URL ANDA

    // 2. Ambil nama dari input field
    const userNameInput = document.getElementById("userName");
    const userName = userNameInput.value.trim();

    // Validasi nama tidak boleh kosong
    if (userName === "") {
      alert("Harap isi nama Anda terlebih dahulu!");
      userNameInput.focus();
      return;
    }

    // 3. Kalkulasi skor (logika ini tetap sama)
    let totalScore = 0;
    const totalQuestions = questionsData.length;
    let answeredQuestions = 0;
    // ... (kode kalkulasi skor Anda tetap di sini) ...

    questionsData.forEach((questionItem) => {
      const selectedOption = document.querySelector(
        `input[name="${questionItem.id}"]:checked`
      );
      if (selectedOption) {
        answeredQuestions++;
        totalScore += parseInt(selectedOption.value);
      }
    });

    if (answeredQuestions < totalQuestions) {
      alert("Harap jawab semua pertanyaan terlebih dahulu!");
      return;
    }

    let category = {};
    if (totalScore <= 20) {
      category = { code: "F", name: "Tetap" };
    } else if (totalScore <= 33) {
      category = { code: "FG", name: "Tetap bertumbuh" };
    } else if (totalScore <= 44) {
      category = { code: "GF", name: "Bertumbuh tetap" };
    } else {
      category = { code: "G", name: "Bertumbuh" };
    }

    // 4. Tampilkan hasil di halaman (logika ini tetap sama)
    document.getElementById("score-display").textContent = totalScore;
    document.getElementById("mindset-category-display").textContent =
      category.code;
    document.getElementById("mindset-description-display").textContent =
      category.name;

    resultContainer.classList.remove("d-none");
    resultContainer.scrollIntoView({ behavior: "smooth" });

    // 5. Siapkan data untuk dikirim ke Google Sheet
    const dataToSend = {
      nama: userName,
      skor: totalScore,
      kategori: category.code,
      deskripsi: category.name,
    };

    // 6. Kirim data menggunakan fetch()
    submitBtn.disabled = true; // Nonaktifkan tombol saat mengirim
    submitBtn.textContent = "Mengirim...";

    fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        submitBtn.textContent = "Berhasil Dikirim!";
        // Anda bisa menambahkan pesan sukses lainnya di sini
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim data. Coba lagi.");
        submitBtn.textContent = "Gagal, Coba Lagi";
        submitBtn.disabled = false; // Aktifkan lagi tombolnya
      });
  });
});

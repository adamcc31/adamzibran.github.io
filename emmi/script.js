document.addEventListener('DOMContentLoaded', function() {

    // --- BAGIAN 1: DATA PRODUK TERPUSAT ---
    // Semua informasi spesifik rasa disimpan di sini.
    // Ini memudahkan penambahan rasa baru di masa depan tanpa mengubah HTML.
    const flavorData = {
        'Strawberry': {
            image: 'img/yogurt-hero.png',
            specificName: '2% fat, 8% protein, made from fresh Swiss Milk, with 8% Strawberries.',
            ingredients: 'Swiss <strong>milk</strong>, fruit preparation (strawberries, sugar, modified starch), sugar, <strong>milk</strong> protein, lactic cultures.',
            nutrition: [
                { label: 'Energy', value: '465 kJ (110 kcal)' },
                { label: 'Fat', value: '2.0 g' },
                { label: 'of which saturates', value: '1.2 g', indent: true },
                { label: 'Carbohydrate', value: '15.0 g' },
                { label: 'of which sugars', value: '14.0 g', indent: true },
                { label: 'Protein', value: '8.0 g' },
                { label: 'Salt', value: '0.0 g' }
            ],
            serving: {
                title: 'Perfect Mornings with Strawberry Yogurt Parfait',
                description: 'Layer Emmi Strawberry Yogurt with fresh granola, sliced bananas, and a drizzle of honey for a delightful and energizing breakfast. The creaminess of the yogurt perfectly complements the crunch of the granola.',
                image: 'img/serving-strawberry.png',
                alt: 'A serving suggestion for Strawberry yogurt parfait'
            }
        },
        'Peach': {
            image: 'img/yogurt-peach.png',
            specificName: '2% fat, 8% protein, made from fresh Swiss Milk, with 8% Peaches.',
            ingredients: 'Swiss <strong>milk</strong>, fruit preparation (peaches, sugar, modified starch), sugar, <strong>milk</strong> protein, lactic cultures.',
            nutrition: [
                { label: 'Energy', value: '472 kJ (112 kcal)' },
                { label: 'Fat', value: '2.0 g' },
                { label: 'of which saturates', value: '1.2 g', indent: true },
                { label: 'Carbohydrate', value: '15.5 g' },
                { label: 'of which sugars', value: '14.5 g', indent: true },
                { label: 'Protein', value: '8.0 g' },
                { label: 'Salt', value: '0.0 g' }
            ],
            serving: {
                title: 'Refreshing Peach Yogurt Smoothie',
                description: 'Blend Emmi Peach Yogurt with a splash of orange juice and frozen mango chunks for a creamy, tropical smoothie. It’s the perfect afternoon pick-me-up on a warm day.',
                image: 'img/serving-peach.png',
                alt: 'A serving suggestion for a Peach yogurt smoothie'
            }
        },
        'Blueberry': {
            image: 'img/yogurt-blueberry.png',
            specificName: '2% fat, 8% protein, made from fresh Swiss Milk, with 8% Blueberries.',
            ingredients: 'Swiss <strong>milk</strong>, fruit preparation (blueberries, sugar, modified starch), sugar, <strong>milk</strong> protein, lactic cultures.',
            nutrition: [
                { label: 'Energy', value: '468 kJ (111 kcal)' },
                { label: 'Fat', value: '2.0 g' },
                { label: 'of which saturates', value: '1.2 g', indent: true },
                { label: 'Carbohydrate', value: '15.2 g' },
                { label: 'of which sugars', value: '14.2 g', indent: true },
                { label: 'Protein', value: '8.0 g' },
                { label: 'Salt', value: '0.0 g' }
            ],
            serving: {
                title: 'Savory Blueberry Yogurt Topping for Pancakes',
                description: 'Gently warm Emmi Blueberry Yogurt and pour it over a stack of fluffy pancakes. Top with a sprinkle of cinnamon and fresh blueberries for a luxurious and satisfying weekend brunch.',
                image: 'img/serving-blueberry.png',
                alt: 'A serving suggestion of Blueberry yogurt on pancakes'
            }
        }
    };

    // --- BAGIAN 2: ELEMEN DOM ---
    // Mengambil semua elemen yang akan dimanipulasi.
    const flavorGallery = document.querySelector('.flavor-gallery');
    const productImage = document.querySelector('.product-image');
    const productVariant = document.querySelector('.product-variant');
    
    // Elemen untuk konten dinamis
    const detailsGrid = document.querySelector('.details-grid');
    const servingContent = document.querySelector('.serving-suggestion-content');
    const specificNameText = document.getElementById('specific-name-text');
    const ingredientsText = document.getElementById('ingredients-text');
    const nutritionTable = document.getElementById('nutrition-table');

    // Elemen untuk saran penyajian
    const servingImg = document.getElementById('serving-img');
    const servingTitle = document.getElementById('serving-title');
    const servingDesc = document.getElementById('serving-desc');
    
    // --- BAGIAN 3: FUNGSI UTAMA UNTUK UPDATE TAMPILAN ---
    /**
     * Memperbarui seluruh tampilan halaman berdasarkan rasa yang dipilih.
     * @param {string} flavorName - Nama rasa (e.g., 'Strawberry').
     */
    function updateProductView(flavorName) {
        const data = flavorData[flavorName];
        if (!data) return; // Keluar jika data tidak ditemukan

        // Efek fade-out sebelum mengubah konten
        productImage.style.opacity = '0';
        detailsGrid.style.opacity = '0';
        servingContent.style.opacity = '0';
        
        setTimeout(() => {
            // 1. Update Hero Section
            productImage.src = data.image;
            productImage.alt = `Emmi Swiss Premium Yogurt ${flavorName}`;
            productVariant.textContent = flavorName;

            // 2. Update Product Details
            specificNameText.textContent = data.specificName;
            ingredientsText.innerHTML = data.ingredients;

            // 3. Update Tabel Nutrisi (render ulang tabel)
            nutritionTable.innerHTML = ''; // Kosongkan tabel
            data.nutrition.forEach(item => {
                const row = nutritionTable.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.innerHTML = item.label;
                if (item.indent) {
                    cell1.classList.add('indent-item');
                }
                cell2.innerHTML = item.value;
            });
            
            // 4. Update Bagian Saran Penyajian (Fitur Baru)
            servingImg.src = data.serving.image;
            servingImg.alt = data.serving.alt;
            servingTitle.textContent = data.serving.title;
            servingDesc.textContent = data.serving.description;

            // Efek fade-in setelah konten diperbarui
            productImage.style.opacity = '1';
            detailsGrid.style.opacity = '1';
            servingContent.style.opacity = '1';
            
        }, 400); // Waktu harus cocok dengan transisi CSS
    }

    // --- BAGIAN 4: EVENT LISTENER GALERI ---
    flavorGallery.addEventListener('click', (e) => {
        const selectedFlavorItem = e.target.closest('.flavor-item');
        if (!selectedFlavorItem) return;

        // Dapatkan nama rasa dari data-attribute
        const flavorName = selectedFlavorItem.dataset.flavor;

        // Update tampilan menggunakan fungsi utama
        updateProductView(flavorName);

        // Update status 'active' pada item galeri
        flavorGallery.querySelector('.flavor-item.active').classList.remove('active');
        selectedFlavorItem.classList.add('active');
    });

    // --- BAGIAN 5: ANIMASI SCROLL (Intersection Observer) ---
    // Kode ini tidak berubah, sudah efisien.
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeInElements.forEach(el => observer.observe(el));

    // --- BAGIAN 6: PETA INTERAKTIF (LEAFLET.JS) ---
    // Kode ini tidak berubah.
    const map = L.map('map').setView([46.8063, 7.1619], 12); // Koordinat Fribourg, Swiss
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([46.8063, 7.1619]).addTo(map)
        .bindPopup('<b>Heart of Emmi\'s Milk Production</b><br>Fribourg, Switzerland.')
        .openPopup();
        
    // --- BAGIAN 7: INISIALISASI HALAMAN ---
    // Memuat data untuk rasa default (Strawberry) saat halaman pertama kali dibuka.
    updateProductView('Strawberry');
});
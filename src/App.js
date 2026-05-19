import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Google Sheets API Key - Bu kısmı değiştirin
  const API_KEY = 'YOUR_API_KEY_HERE';
  const SHEET_ID = '1LxTe-oUFgT6R2OBOwcBlQAvg_RYRdVNov9Inf8uIeXI';
  const SHEET_NAME = 'Sheet1'; // Sheet'in adını buraya yazın

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      const rows = data.values;

      if (!rows || rows.length === 0) {
        throw new Error('Sheet boş veya veri bulunamadı');
      }

      // İlk satır başlık, geri kalanı veri
      const headers = rows[0];
      const productRows = rows.slice(1);

      // Başlıkların indekslerini bulun
      const categoryIndex = headers.findIndex(h => h.toLowerCase().includes('kategori'));
      const productIndex = headers.findIndex(h => h.toLowerCase().includes('ürün'));
      const descriptionIndex = headers.findIndex(h => h.toLowerCase().includes('açıklama'));
      const priceIndex = headers.findIndex(h => h.toLowerCase().includes('fiyat'));
      const imageIndex = headers.findIndex(h => h.toLowerCase().includes('resim'));

      // Ürünleri işleyin
      const processedProducts = productRows
        .filter(row => row.length > 0 && row[productIndex])
        .map((row, index) => ({
          id: index,
          category: row[categoryIndex] || 'Diğer',
          name: row[productIndex],
          description: row[descriptionIndex] || '',
          price: row[priceIndex] || '0',
          image: row[imageIndex] || 'https://via.placeholder.com/280x280?text=Resim+Yok',
        }));

      setProducts(processedProducts);

      // Benzersiz kategorileri ayıklayın
      const uniqueCategories = [...new Set(processedProducts.map(p => p.category))];
      setCategories(['Tümü', ...uniqueCategories.sort()]);

      setError(null);
    } catch (err) {
      console.error('Veri çekme hatası:', err);
      setError(`Hata: ${err.message}. Lütfen API Key ve Sheet ID kontrol edin.`);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === 'Tümü'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="App">
      <Header />
      
      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}
      
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Lezzet Yükleniyor...</p>
        </div>
      )}
      
      {!loading && products.length > 0 && (
        <>
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ProductGrid products={filteredProducts} />
        </>
      )}
      
      {!loading && products.length === 0 && !error && (
        <div className="no-products">
          <p>Henüz ürün eklenmemiş</p>
        </div>
      )}
    </div>
  );
}

export default App;

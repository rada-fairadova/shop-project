import React, { useState } from 'react';
import ShopItemFunc from './components/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass';
import ItemDisplay from './components/ItemDisplay';
import './App.css';

function App() {
  const [item] = useState({
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£'
  });

  const demoItems = [
    {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      price: 399,
      currency: '£'
    },
    {
      brand: 'Acne Studios',
      title: 'Vintage jacket',
      description: 'Classic denim jacket',
      price: 299,
      currency: '$'
    },
    {
      brand: 'COS',
      title: 'Wool-blend coat',
      description: 'Modern tailored coat',
      price: 459,
      currency: '€'
    }
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">React Shop Components Comparison</h1>
      
      <div className="components-grid">
        <div>
          <ItemDisplay title="Functional Component" type="func">
            <ShopItemFunc item={item} />
          </ItemDisplay>
        </div>
        
        <div>
          <ItemDisplay title="Class Component" type="class">
            <ShopItemClass item={item} />
          </ItemDisplay>
        </div>
      </div>

      <div className="comparison-section">
        <h2 className="comparison-title">Сравнение компонентов</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h3>Функциональный компонент (ShopItemFunc)</h3>
            <ul>
              <li>Использует функцию и хуки</li>
              <li>Более простой и читаемый синтаксис</li>
              <li>Меньше кода</li>
              <li>Использует деструктуризацию пропсов</li>
              <li>Современный подход в React</li>
            </ul>
          </div>
          
          <div className="comparison-item">
            <h3>Классовый компонент (ShopItemClass)</h3>
            <ul>
              <li>Наследует от React.Component</li>
              <li>Имеет метод render()</li>
              <li>Использует this.props для доступа к свойствам</li>
              <li>Может иметь состояние и методы жизненного цикла</li>
              <li>Классический подход в React</li>
            </ul>
          </div>
        </div>
        
        <div className="comparison-grid" style={{ marginTop: '30px' }}>
          <div className="comparison-item">
            <h3>Общие черты</h3>
            <ul>
              <li>Принимают одинаковый пропс `item`</li>
              <li>Отображают одинаковую структуру DOM</li>
              <li>Используют одинаковые PropTypes</li>
              <li>Применяют одинаковые стили</li>
              <li>Форматируют цену одинаково: {item.currency}{item.price.toFixed(2)}</li>
            </ul>
          </div>
          
          <div className="comparison-item">
            <h3>Демо товары</h3>
            <ul>
              {demoItems.map((demoItem, index) => (
                <li key={index}>
                  {demoItem.brand} - {demoItem.title}: {demoItem.currency}{demoItem.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Проект демонстрирует реализацию одинакового UI с использованием двух разных подходов в React</p>
        <p>Функциональные компоненты с хуками vs Классовые компоненты</p>
      </div>
    </div>
  );
}

export default App;

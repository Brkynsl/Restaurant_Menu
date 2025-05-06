import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = [
    { 
      name: 'Burger', 
      price: 30, 
      image: '/indir.jpeg', 
      category: 'Ana Yemek', 
      description: '100% dana etiyle hazırlanmış, özel baharatlarla marine edilmiş burger. Çıtır taze marul, domates ve eritilmiş cheddar peyniriyle birlikte servis edilir. Yanında çıtır patates ve özel soslarımızla sunulmaktadır.' 
    },
    { 
      name: 'Makarna', 
      price: 25, 
      image: '/makarna.jpg', 
      category: 'Ana Yemek', 
      description: 'Taze hazırlanmış makarna, İtalyan usulü kremalı Alfredo sos veya zengin domates bazlı Napoli sos ile sunulmaktadır. Üzerinde rendelenmiş parmesan peyniri ile tamamlanan bu özel lezzet, taptaze fesleğen ile süslenmiştir.' 
    },
    { 
      name: 'Salata', 
      price: 15, 
      image: '/salata.jpg', 
      category: 'Ara Sıcak', 
      description: 'Mevsim yeşillikleri, cherry domates, salatalık, siyah zeytin ve rendelenmiş peynir ile hazırlanan sağlıklı ve hafif bir seçenek. Özel limonlu ve zeytinyağlı sos ile tatlandırılmıştır. Arzuya göre tavuk veya ton balığı eklenebilir.' 
    },
    { 
      name: 'Pizza', 
      price: 20, 
      image: '/pizzajpg.jpg', 
      category: 'Ana Yemek', 
      description: 'İncecik açılmış hamur, özel domates sosu ve erimiş mozzarella peyniri ile kaplanmış, üzerine taze mantar, sucuk, zeytin ve biber eklenerek odun fırınında pişirilmiştir. Lezzetli ve doyurucu bir İtalyan klasiği!' 
    },
    { 
      name: 'Cheesecake', 
      price: 12, 
      image: '/cheesecake.jpg', 
      category: 'Tatlı', 
      description: 'Taze ve kremsi cheesecake, alt tabanı tereyağlı bisküvi kırıntılarından yapılmıştır. Üzerinde çilek sosu veya çikolata eritmesi ile sunulur. Hafif ve tatlı krizleri için mükemmel bir tercihtir!' 
    },
    { 
      name: 'Soda', 
      price: 5, 
      image: '/soda.jpg', 
      category: 'Soğuk İçecek', 
      description: 'Buz gibi ferahlatıcı soda. Sade veya limon aromalı olarak tercih edilebilir. Yaz günlerinde susuzluğunuzu gidermek için birebir!' 
    },
    { 
      name: 'Çay', 
      price: 5, 
      image: '/çay.jpg', 
      category: 'Sıcak İçecek', 
      description: 'Demleme Türk çayı, mis gibi kokusu ve yoğun aromasıyla keyifli sohbetlerinize eşlik eder. Geleneksel ince belli bardakta servis edilir.' 
    },
    { 
      name: 'Kahve', 
      price: 7, 
      image: '/kahve.jpg', 
      category: 'Sıcak İçecek', 
      description: 'Yoğun aromalı taze çekilmiş kahve çekirdeklerinden hazırlanmış espresso bazlı içecekler. Sade, sütlü, cappuccino veya latte seçenekleriyle sunulmaktadır.' 
    }
  ];

  categories = ['Tümü', 'Ana Yemek', 'Ara Sıcak', 'Tatlı', 'Sıcak İçecek', 'Soğuk İçecek'];
  selectedCategory = 'Tümü';

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}

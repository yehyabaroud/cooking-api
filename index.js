// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// بيانات ثابتة لعدة وصفات مع نوع التصنيف
const recipes = [
  {
    id: 1,
    name: "كبسة دجاج",
    type: "أكلات", // وصفة طبخ
    ingredients: ["دجاج", "أرز", "بهارات"],
    instructions: "يُطهى الدجاج مع البهارات ثم يُضاف الأرز ليُنضج معاً.",
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33487_115bd3bd2d2-bd75-452d-9f34-5d4190fc99d4.jpg"
  },
  {
    id: 2,
    name: "مسقعة",
    type: "أكلات",
    ingredients: ["باذنجان", "لحم", "صلصة طماطم"],
    instructions: "يُقلى الباذنجان مع اللحم ثم يُطهى مع صلصة الطماطم.",
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33487_115bd3bd2d2-bd75-452d-9f34-5d4190fc99d4.jpg"
  },
  {
    id: 3,
    name: "عصير برتقال",
    type: "مشروبات", // مشروبات
    ingredients: ["برتقال"],
    instructions: "يُعصر البرتقال ويتم تقديم العصير طازجاً.",
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33487_115bd3bd2d2-bd75-452d-9f34-5d4190fc99d4.jpg"
  },
  {
    id: 4,
    name: "شاي بالنعناع",
    type: "مشروبات",
    ingredients: ["شاي", "نعناع", "ماء"],
    instructions: "يُغلى الماء ويضاف إليه الشاي والنعناع للحصول على مشروب منعش.",
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33487_115bd3bd2d2-bd75-452d-9f34-5d4190fc99d4.jpg"
  },
  {
    id: 5,
    name: "بسبوسة",
    type: "حلويات", // حلويات
    ingredients: ["سميد", "سكر", "لبن", "لوز"],
    instructions: "يُخلط السميد مع السكر واللبن وتخبز في الفرن ثم يُسكب عليها القطر.",
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33487_115bd3bd2d2-bd75-452d-9f34-5d4190fc99d4.jpg"
  },
  {
    id: 6,
    name: "كنافة",
    type: "حلويات",
    ingredients: ["كنافة", "جبن", "قطر"],
    instructions: "تُفرد الكنافة وتُرص طبقة من الجبن ثم تُخبز وتسقى بالقطر.",
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33487_115bd3bd2d2-bd75-452d-9f34-5d4190fc99d4.jpg"
  }
];

// نقطة النهاية لعرض وصفات الطبخ (Foods)
app.get('/api/foods', (req, res) => {
  const foods = recipes.filter(recipe => recipe.type === "أكلات");
  res.json(foods);
});

// نقطة النهاية لعرض المشروبات (Drinks)
app.get('/api/drinks', (req, res) => {
  const drinks = recipes.filter(recipe => recipe.type === "مشروبات");
  res.json(drinks);
});

// نقطة النهاية لعرض الحلويات (Desserts)
app.get('/api/desserts', (req, res) => {
  const desserts = recipes.filter(recipe => recipe.type === "حلويات");
  res.json(desserts);
});

// نقطة النهاية العامة لعرض كل الوصفات
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// نقطة نهاية للتصنيفات (categories)
app.get('/api/categories', (req, res) => {
  // نستخلص جميع قيم type من الوصفات، مثل cooking, drinks, desserts
  const allTypes = recipes.map((r) => r.type);
  // نزيل التكرارات باستخدام Set
  const uniqueTypes = [...new Set(allTypes)];
  // نُعيد النتيجة على شكل JSON
  res.json(uniqueTypes);
});

// بدء تشغيل السيرفر على المنفذ المحدد
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

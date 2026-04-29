import { useState } from "react";

const menuData = [
  {
    category: "🔥 Hot Picks",
    items: [
      { id: 1, name: "Truffle Smash Burger", desc: "Double patty, truffle aioli, aged cheddar, brioche bun", price: 14.99, time: "18 min", tag: "Bestseller", emoji: "🍔", cal: 820 },
      { id: 2, name: "Spicy Korean Wings", desc: "Gochujang glaze, sesame, spring onion, blue cheese dip", price: 11.49, time: "22 min", tag: "Spicy 🌶️", emoji: "🍗", cal: 640 },
      { id: 3, name: "Loaded Fries Supreme", desc: "Bacon bits, jalapeños, nacho cheese, sour cream", price: 8.99, time: "12 min", tag: "Popular", emoji: "🍟", cal: 710 },
      { id: 11, name: "Crispy Chicken Sandwich", desc: "Buttermilk fried chicken, pickles, sriracha honey, brioche", price: 12.99, time: "20 min", tag: "Bestseller", emoji: "🥪", cal: 760 },
      { id: 12, name: "Cheesy Quesadilla", desc: "Three-cheese blend, roasted peppers, black bean, sour cream", price: 9.49, time: "15 min", tag: "Veggie", emoji: "🫓", cal: 620 },
    ],
  },
  {
    category: "🍕 Pizza",
    items: [
      { id: 4, name: "Margherita Classica", desc: "San Marzano tomato, buffalo mozzarella, fresh basil", price: 13.49, time: "25 min", tag: "Veggie", emoji: "🍕", cal: 580 },
      { id: 5, name: "Pepperoni Inferno", desc: "Double pepperoni, chili oil, mozzarella, crispy basil", price: 15.99, time: "25 min", tag: "Spicy 🌶️", emoji: "🍕", cal: 920 },
      { id: 6, name: "BBQ Pulled Pork", desc: "Slow-cooked pork, smoked BBQ, red onion, jalapeño", price: 16.49, time: "28 min", tag: "Meaty", emoji: "🍕", cal: 980 },
      { id: 13, name: "Four Cheese Dream", desc: "Mozzarella, gouda, parmesan, gorgonzola, honey drizzle", price: 17.49, time: "27 min", tag: "Chef's Choice", emoji: "🍕", cal: 1040 },
      { id: 14, name: "Garden Veggie Blast", desc: "Capsicum, mushroom, olives, cherry tomato, pesto base", price: 14.49, time: "24 min", tag: "Veggie", emoji: "🍕", cal: 540 },
      { id: 15, name: "Chicken Tikka Pizza", desc: "Tandoori chicken, onion, tikka sauce, mozzarella, coriander", price: 16.99, time: "28 min", tag: "Popular", emoji: "🍕", cal: 870 },
    ],
  },
  {
    category: "🥗 Fresh & Light",
    items: [
      { id: 7, name: "Greek Power Bowl", desc: "Quinoa, feta, olives, cucumber, tzatziki, roasted peppers", price: 12.49, time: "15 min", tag: "Healthy", emoji: "🥗", cal: 420 },
      { id: 8, name: "Avocado Chicken Wrap", desc: "Grilled chicken, guac, romaine, tomato, chipotle mayo", price: 11.99, time: "14 min", tag: "Low Carb", emoji: "🌯", cal: 510 },
      { id: 16, name: "Watermelon Feta Salad", desc: "Fresh watermelon, crumbled feta, mint, balsamic glaze, arugula", price: 10.49, time: "10 min", tag: "Healthy", emoji: "🥗", cal: 310 },
      { id: 17, name: "Smoked Salmon Wrap", desc: "Cream cheese, smoked salmon, capers, red onion, whole wheat wrap", price: 13.99, time: "12 min", tag: "Low Carb", emoji: "🌯", cal: 480 },
      { id: 18, name: "Buddha Bowl", desc: "Brown rice, edamame, roasted sweet potato, tahini dressing, seeds", price: 12.99, time: "16 min", tag: "Vegan", emoji: "🥙", cal: 460 },
    ],
  },
  {
    category: "🍜 Asian Flavours",
    items: [
      { id: 9, name: "Ramen Tonkotsu", desc: "Rich pork broth, soft egg, chashu, nori, bamboo shoots", price: 14.99, time: "20 min", tag: "Chef's Choice", emoji: "🍜", cal: 750 },
      { id: 10, name: "Pad Thai Classic", desc: "Rice noodles, prawns, tofu, peanuts, tamarind sauce", price: 13.49, time: "18 min", tag: "Crowd Fav", emoji: "🍝", cal: 680 },
      { id: 19, name: "Spicy Miso Ramen", desc: "Miso broth, corn, butter, spring onion, chili paste, soft egg", price: 15.49, time: "22 min", tag: "Spicy 🌶️", emoji: "🍜", cal: 790 },
      { id: 20, name: "Dim Sum Basket", desc: "Steamed har gow, siu mai, char siu bao, dipping sauces", price: 12.99, time: "25 min", tag: "Popular", emoji: "🥟", cal: 520 },
      { id: 21, name: "Teriyaki Salmon Rice", desc: "Grilled salmon, steamed jasmine rice, sesame, pickled ginger", price: 16.49, time: "20 min", tag: "Healthy", emoji: "🍱", cal: 610 },
      { id: 22, name: "General Tso's Chicken", desc: "Crispy chicken, sweet-spicy sauce, steamed broccoli, fried rice", price: 14.49, time: "22 min", tag: "Crowd Fav", emoji: "🍛", cal: 870 },
    ],
  },
  {
    category: "🍔 Burgers & Sandwiches",
    items: [
      { id: 23, name: "Classic Cheeseburger", desc: "Beef patty, American cheese, lettuce, tomato, pickles, mustard", price: 10.99, time: "16 min", tag: "Popular", emoji: "🍔", cal: 720 },
      { id: 24, name: "Mushroom Swiss Burger", desc: "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli, pretzel bun", price: 13.49, time: "18 min", tag: "Meaty", emoji: "🍔", cal: 810 },
      { id: 25, name: "Veggie Black Bean Burger", desc: "Black bean patty, avocado, roasted corn salsa, chipotle mayo", price: 11.99, time: "18 min", tag: "Veggie", emoji: "🍔", cal: 590 },
      { id: 26, name: "Club Sandwich", desc: "Triple-decker, turkey, bacon, lettuce, tomato, egg mayo", price: 12.49, time: "14 min", tag: "Crowd Fav", emoji: "🥪", cal: 780 },
      { id: 27, name: "Philly Cheesesteak", desc: "Shaved ribeye, provolone, caramelised onions, green peppers, hoagie", price: 15.99, time: "22 min", tag: "Bestseller", emoji: "🥖", cal: 930 },
    ],
  },
  {
    category: "🍰 Desserts",
    items: [
      { id: 28, name: "Molten Lava Cake", desc: "Warm chocolate cake, liquid centre, vanilla gelato, berry coulis", price: 8.99, time: "15 min", tag: "Bestseller", emoji: "🍫", cal: 540 },
      { id: 29, name: "Mango Sticky Rice", desc: "Thai glutinous rice, fresh alphonso mango, coconut cream", price: 7.49, time: "10 min", tag: "Crowd Fav", emoji: "🥭", cal: 410 },
      { id: 30, name: "New York Cheesecake", desc: "Classic baked cheesecake, graham cracker crust, strawberry compote", price: 8.49, time: "8 min", tag: "Popular", emoji: "🍰", cal: 490 },
      { id: 31, name: "Churros & Dips", desc: "Cinnamon churros, dark chocolate dip, dulce de leche, cream", price: 7.99, time: "12 min", tag: "Popular", emoji: "🍩", cal: 460 },
      { id: 32, name: "Tiramisu", desc: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting", price: 9.49, time: "8 min", tag: "Chef's Choice", emoji: "🍮", cal: 430 },
    ],
  },
  {
    category: "🥤 Drinks",
    items: [
      { id: 33, name: "Mango Lassi", desc: "Fresh Alphonso mango, yogurt, cardamom, rose water", price: 4.99, time: "5 min", tag: "Popular", emoji: "🥭", cal: 230 },
      { id: 34, name: "Cold Brew Coffee", desc: "18-hour steeped cold brew, served over ice with oat milk option", price: 5.49, time: "3 min", tag: "Crowd Fav", emoji: "☕", cal: 15 },
      { id: 35, name: "Watermelon Mint Cooler", desc: "Fresh watermelon juice, mint, lime, himalayan salt", price: 4.49, time: "5 min", tag: "Healthy", emoji: "🍹", cal: 120 },
      { id: 36, name: "Matcha Latte", desc: "Ceremonial grade matcha, steamed whole milk, honey", price: 5.99, time: "5 min", tag: "Healthy", emoji: "🍵", cal: 180 },
      { id: 37, name: "Berry Blast Smoothie", desc: "Strawberry, blueberry, raspberry, banana, almond milk, chia seeds", price: 6.49, time: "6 min", tag: "Healthy", emoji: "🫐", cal: 260 },
    ],
  },
  {
    category: "🌴 South Indian Specials",
    items: [
      { id: 38, name: "Masala Dosa", desc: "Crispy rice crepe, spiced potato filling, sambar, coconut chutney", price: 5.99, time: "15 min", tag: "Bestseller", emoji: "🫓", cal: 380 },
      { id: 39, name: "Idli Sambar", desc: "Soft steamed rice cakes, lentil sambar, coconut & tomato chutneys", price: 4.49, time: "12 min", tag: "Healthy", emoji: "🍚", cal: 280 },
      { id: 40, name: "Chettinad Chicken Curry", desc: "Slow-cooked chicken in aromatic Chettinad spices, kalpasi, marathi mokku", price: 13.99, time: "30 min", tag: "Spicy 🌶️", emoji: "🍛", cal: 680 },
      { id: 41, name: "Pongal", desc: "Creamy rice & moong dal, pepper, cumin, ghee, cashews, sambar", price: 4.99, time: "12 min", tag: "Veggie", emoji: "🍲", cal: 320 },
      { id: 42, name: "Kothu Parotta", desc: "Shredded layered parotta, egg, onion, tomato, spicy masala gravy", price: 8.99, time: "20 min", tag: "Popular", emoji: "🫔", cal: 590 },
      { id: 43, name: "Prawn Thokku Rice", desc: "Spicy prawn thokku, steamed seeraga samba rice, pickled onions", price: 14.49, time: "25 min", tag: "Chef's Choice", emoji: "🦐", cal: 640 },
      { id: 44, name: "Appam & Stew", desc: "Lacy rice hoppers with coconut milk veg stew, cardamom & bay leaf", price: 7.99, time: "18 min", tag: "Veggie", emoji: "🥞", cal: 410 },
      { id: 45, name: "Vada Sambar", desc: "Crispy urad dal vadas, dunked in hot sambar, green chutney", price: 4.99, time: "14 min", tag: "Popular", emoji: "🍩", cal: 340 },
      { id: 46, name: "Mutton Kola Urundai", desc: "Minced mutton kebabs, fennel, red chilli, curry leaves — deep fried", price: 11.99, time: "25 min", tag: "Meaty", emoji: "🥩", cal: 560 },
      { id: 47, name: "Filter Coffee", desc: "Strong decoction, full-cream milk, frothy davara tumbler style", price: 2.99, time: "5 min", tag: "Crowd Fav", emoji: "☕", cal: 90 },
    ],
  },
];

const tagColors = {
  "Bestseller": "#FF6B2C",
  "Spicy 🌶️": "#E53E3E",
  "Popular": "#D69E2E",
  "Veggie": "#38A169",
  "Meaty": "#744210",
  "Healthy": "#2B6CB0",
  "Low Carb": "#553C9A",
  "Chef's Choice": "#B7791F",
  "Crowd Fav": "#C05621",
  "Vegan": "#276749",
};

export default function FoodApp() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("🔥 Hot Picks");
  const [cartOpen, setCartOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [search, setSearch] = useState("");

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing.qty === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) => i.id === id ? { ...i, qty: i.qty - 1 } : i);
    });
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const deliveryFee = cart.length > 0 ? 2.49 : 0;

  const allItems = menuData.flatMap((c) => c.items);
  const filtered = search
    ? allItems.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()) || i.desc.toLowerCase().includes(search.toLowerCase()))
    : null;

  const displayCategories = filtered
    ? [{ category: `Results for "${search}"`, items: filtered }]
    : menuData;

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      setCart([]);
      setCartOpen(false);
    }, 3500);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0D0D0D", minHeight: "100vh", color: "#F5F0E8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #FF6B2C; border-radius: 2px; }
        .item-card { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: default; }
        .item-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(255,107,44,0.15); }
        .add-btn { transition: all 0.15s ease; border: none; cursor: pointer; }
        .add-btn:hover { transform: scale(1.08); }
        .cat-pill { transition: all 0.2s ease; cursor: pointer; border: none; }
        .cat-pill:hover { background: #2a2a2a !important; }
        .cart-panel { transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); }
        .qty-btn { transition: background 0.15s; border: none; cursor: pointer; }
        .qty-btn:hover { background: #FF6B2C !important; }
        @keyframes pop { 0%{transform:scale(0.8);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
        @keyframes slide-in { from{transform:translateX(100%)} to{transform:translateX(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        .badge-pop { animation: pop 0.3s ease forwards; }
        .cart-slide { animation: slide-in 0.35s cubic-bezier(0.4,0,0.2,1); }
        .order-success { animation: pop 0.4s ease forwards; }
        .tracking-pulse { animation: pulse 2s ease infinite; }
      `}</style>

      {/* Header */}
      <header style={{ background: "#111", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 100, padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: "#FF6B2C", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🍽</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px", color: "#F5F0E8" }}>Nithyasri Cloud Kitchen</span>
          </div>

          <div style={{ flex: 1, maxWidth: 360, margin: "0 32px" }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dishes..."
              style={{ width: "100%", background: "#1C1C1C", border: "1px solid #2a2a2a", borderRadius: 10, padding: "9px 16px", color: "#F5F0E8", fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: "none" }}
            />
          </div>

          <button
            className="add-btn"
            onClick={() => setCartOpen(true)}
            style={{ background: "#FF6B2C", color: "#fff", borderRadius: 10, padding: "9px 20px", fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, display: "flex", alignItems: "center", gap: 8, position: "relative" }}
          >
            🛒 Cart
            {totalItems > 0 && (
              <span className="badge-pop" style={{ background: "#fff", color: "#FF6B2C", borderRadius: "50%", width: 20, height: 20, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0a00 0%, #110800 50%, #0D0D0D 100%)", padding: "48px 24px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,107,44,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,107,44,0.05) 0%, transparent 50%)" }} />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: 4, color: "#FF6B2C", textTransform: "uppercase", marginBottom: 12 }}>Authentic Home-Style · Fresh Daily</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16, color: "#F5F0E8" }}>
          Nithyasri <span style={{ color: "#FF6B2C" }}>Cloud Kitchen</span>
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#888", fontSize: 16, maxWidth: 480, margin: "0 auto 28px" }}>
          Authentic South Indian & world flavours, cooked fresh and delivered hot to your door.
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {[["⚡", "Avg 20 min"], ["🌟", "4.9 Rating"], ["🚚", "Free over ₹499"]].map(([icon, text]) => (
            <div key={text} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#bbb", display: "flex", alignItems: "center", gap: 6 }}>
              <span>{icon}</span>{text}
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Category pills */}
        {!search && (
          <div style={{ display: "flex", gap: 10, overflowX: "auto", padding: "28px 0 8px", scrollbarWidth: "none" }}>
            {menuData.map((c) => (
              <button
                key={c.category}
                className="cat-pill"
                onClick={() => setActiveCategory(c.category)}
                style={{
                  background: activeCategory === c.category ? "#FF6B2C" : "#1C1C1C",
                  color: activeCategory === c.category ? "#fff" : "#aaa",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  border: activeCategory === c.category ? "none" : "1px solid #2a2a2a",
                }}
              >
                {c.category}
              </button>
            ))}
          </div>
        )}

        {/* Menu */}
        {displayCategories.map((section) => (
          (!search && section.category !== activeCategory) ? null : (
            <div key={section.category} style={{ marginTop: 36 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, marginBottom: 20, color: "#F5F0E8" }}>
                {section.category}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                {section.items.map((item) => {
                  const inCart = cart.find((i) => i.id === item.id);
                  return (
                    <div key={item.id} className="item-card" style={{ background: "#161616", border: "1px solid #222", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                      {/* Emoji banner */}
                      <div style={{ background: "#1C1C1C", height: 90, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, position: "relative" }}>
                        {item.emoji}
                        <span style={{ position: "absolute", top: 10, right: 10, background: tagColors[item.tag] || "#555", color: "#fff", borderRadius: 6, padding: "3px 8px", fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                          {item.tag}
                        </span>
                      </div>
                      <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#F5F0E8", lineHeight: 1.3, flex: 1, marginRight: 8 }}>{item.name}</h3>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, color: "#FF6B2C", whiteSpace: "nowrap" }}>₹{(item.price * 83).toFixed(0)}</span>
                        </div>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#777", lineHeight: 1.5 }}>{item.desc}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 12 }}>
                          <div style={{ display: "flex", gap: 12 }}>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#555" }}>⏱ {item.time}</span>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#555" }}>🔥 {item.cal} kcal</span>
                          </div>
                          {inCart ? (
                            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#1C1C1C", borderRadius: 8, padding: "4px 8px" }}>
                              <button className="qty-btn" onClick={() => removeFromCart(item.id)} style={{ background: "#2a2a2a", color: "#fff", width: 26, height: 26, borderRadius: 6, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#FF6B2C", minWidth: 16, textAlign: "center" }}>{inCart.qty}</span>
                              <button className="qty-btn" onClick={() => addToCart(item)} style={{ background: "#FF6B2C", color: "#fff", width: 26, height: 26, borderRadius: 6, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                            </div>
                          ) : (
                            <button className="add-btn" onClick={() => addToCart(item)} style={{ background: "#FF6B2C", color: "#fff", borderRadius: 8, padding: "7px 16px", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                              + Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Cart Overlay */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
          <div onClick={() => setCartOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} />
          <div className="cart-slide" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "min(420px, 100vw)", background: "#111", borderLeft: "1px solid #222", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "24px 24px 16px", borderBottom: "1px solid #1e1e1e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700 }}>Your Order</h2>
              <button onClick={() => setCartOpen(false)} style={{ background: "#1C1C1C", border: "none", color: "#aaa", width: 32, height: 32, borderRadius: 8, fontSize: 18, cursor: "pointer" }}>×</button>
            </div>

            {ordered ? (
              <div className="order-success" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 32 }}>
                <div style={{ fontSize: 64 }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, textAlign: "center" }}>Order Placed!</h3>
                <p className="tracking-pulse" style={{ fontFamily: "'DM Sans', sans-serif", color: "#FF6B2C", fontSize: 14, textAlign: "center" }}>🚴 Rider is on the way • ~22 min</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: 13, textAlign: "center" }}>Sit tight. Hot food is coming your way.</p>
              </div>
            ) : cart.length === 0 ? (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 32 }}>
                <div style={{ fontSize: 56 }}>🛒</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: 15, textAlign: "center" }}>Your cart is empty.<br />Add something delicious!</p>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: "1px solid #1a1a1a" }}>
                      <span style={{ fontSize: 28 }}>{item.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14, color: "#F5F0E8" }}>{item.name}</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#FF6B2C", marginTop: 2 }}>₹{(item.price * 83 * item.qty).toFixed(0)}</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#1C1C1C", borderRadius: 8, padding: "4px 8px" }}>
                        <button className="qty-btn" onClick={() => removeFromCart(item.id)} style={{ background: "#2a2a2a", color: "#fff", width: 24, height: 24, borderRadius: 5, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", minWidth: 16, textAlign: "center", fontSize: 14 }}>{item.qty}</span>
                        <button className="qty-btn" onClick={() => addToCart(item)} style={{ background: "#FF6B2C", color: "#fff", width: 24, height: 24, borderRadius: 5, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "16px 24px 28px", borderTop: "1px solid #1e1e1e" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#777", fontSize: 14 }}>Subtotal</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#ccc", fontSize: 14 }}>₹{(totalPrice * 83).toFixed(0)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#777", fontSize: 14 }}>Delivery fee</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#ccc", fontSize: 14 }}>₹{(deliveryFee * 83).toFixed(0)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, paddingTop: 12, borderTop: "1px solid #2a2a2a" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700 }}>Total</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#FF6B2C" }}>₹{((totalPrice + deliveryFee) * 83).toFixed(0)}</span>
                  </div>
                  <button className="add-btn" onClick={handleOrder} style={{ width: "100%", background: "#FF6B2C", color: "#fff", borderRadius: 12, padding: "15px", fontSize: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: 0.5 }}>
                    Place Order 🚀
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

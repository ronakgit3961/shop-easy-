import React from "react";

function App() {
  const products = [
    // {
    //   category: "Electronics",
    //   name: "Product 1",
    //   price: "$10",
    // },
    {
      category: "Home",
      name: "Product 2",
      price: "$20",
    },
    {
      category: "Garden",
      name: "Product 3",
      price: "$30",
    },
    {
      category: "Sports",
      name: "Product 4",
      price: "$40",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f5faff",
      fontFamily: "Arial, sans-serif",
      color: "#111827",
    },

    navbar: {
      height: "75px",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 5%",
      borderBottom: "1px solid #e5e7eb",
    },

    logo: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#5425d8",
    },

    navLinks: {
      display: "flex",
      gap: "38px",
      alignItems: "center",
    },

    navLink: {
      textDecoration: "none",
      color: "#111827",
      fontSize: "14px",
      cursor: "pointer",
    },

    loginButton: {
      backgroundColor: "#5425d8",
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: "10px 17px",
      cursor: "pointer",
      fontSize: "13px",
    },

    hero: {
      minHeight: "410px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "30px 8% 10px",
      gap: "50px",
    },

    heroContent: {
      flex: 1,
      maxWidth: "520px",
    },

    heroTitle: {
      fontSize: "21px",
      marginBottom: "15px",
      fontWeight: "700",
    },

    heroText: {
      fontSize: "13px",
      lineHeight: "1.6",
      color: "#555",
      maxWidth: "370px",
      marginBottom: "20px",
    },

    startButton: {
      backgroundColor: "#5425d8",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "10px 16px",
      fontSize: "12px",
      cursor: "pointer",
    },

    illustrationContainer: {
      flex: 1,
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },

    topBox: {
      position: "absolute",
      width: "135px",
      height: "115px",
      border: "1.5px solid #26364a",
      borderRadius: "18px",
      transform: "rotate(32deg)",
      top: "45px",
      left: "45%",
      backgroundColor: "#f5faff",
      zIndex: 3,
    },

    middleBox: {
      position: "absolute",
      width: "145px",
      height: "115px",
      border: "1.5px solid #26364a",
      borderRadius: "18px",
      transform: "rotate(32deg)",
      top: "105px",
      left: "38%",
      backgroundColor: "#f5faff",
      zIndex: 2,
    },

    purpleBox: {
      position: "absolute",
      width: "145px",
      height: "110px",
      border: "1.5px solid #5425d8",
      borderRadius: "18px",
      transform: "rotate(32deg)",
      top: "145px",
      left: "38%",
      backgroundColor: "#5425d8",
      zIndex: 1,
    },

    productsSection: {
      padding: "20px 7% 60px",
    },

    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "30px",
    },

    productCard: {
      backgroundColor: "#f7fbff",
      border: "1px solid #dbe4ed",
      padding: "16px",
      minHeight: "110px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    category: {
      fontSize: "11px",
      color: "#4b5563",
      marginBottom: "5px",
    },

    productName: {
      fontSize: "14px",
      fontWeight: "600",
      margin: "0 0 6px",
    },

    price: {
      color: "#149447",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "8px",
    },

    buyButton: {
      alignSelf: "flex-start",
      backgroundColor: "#5425d8",
      border: "none",
      color: "#fff",
      padding: "7px 12px",
      borderRadius: "3px",
      fontSize: "10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>ShopEasy</div>

        <div style={styles.navLinks}>
          <a style={styles.navLink}>Home</a>
          <a style={styles.navLink}>Products</a>
          <a style={styles.navLink}>About</a>
          <a style={styles.navLink}>Contact</a>
        </div>

        <button style={styles.loginButton}>
          Login
        </button>
      </nav>


      {/* HERO SECTION */}
      <section style={styles.hero}>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Find products you love
          </h1>

          <p style={styles.heroText}>
            Discover and shop for amazing products at amazing prices!
          </p>

          <button style={styles.startButton}>
            Shop Now
          </button>
        </div>


        {/* CSS ILLUSTRATION */}
        <div style={styles.illustrationContainer}>

          <div style={styles.topBox}></div>

          <div style={styles.middleBox}></div>

          <div style={styles.purpleBox}></div>

        </div>

      </section>


      {/* PRODUCT SECTION */}
      <section style={styles.productsSection}>

        <div style={styles.productGrid}>

          {products.map((product, index) => (
            <div style={styles.productCard} key={index}>

              <div>
                <div style={styles.category}>
                  {product.category}
                </div>

                <h3 style={styles.productName}>
                  {product.name}
                </h3>

                <div style={styles.price}>
                  {product.price}
                </div>
              </div>

              <button style={styles.buyButton}>
                Buy Now
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default App;
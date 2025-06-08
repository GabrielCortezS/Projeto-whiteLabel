import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente de menu de navegação (Navbar).
 * Permite o usuário navegar entre as páginas principais do sistema.
 */

const Navbar = () => {
    return(
        <nav styles = {styles.navbar}>
            <ul styles = {styles.navList}>
                <li styles = {styles.navItem}>
                    <Link to ="/" styles = {styles.navLink}>HOME</Link>
                </li>
                <li styles = {styles.navItem}>
                    <Link to ="/" styles = {styles.navLink}>Produtos</Link>
                </li>
                <li styles = {styles.navItem}>
                    <Link to ="/" styles = {styles.navLink}>Cadastrar Produto</Link>
                </li>
            </ul>
        </nav>
    );
};

// Estilos simples para o Navbar (pode ser trocado por CSS ou Tailwind depois)

const styles = {
    navbar: {
        background:'#007bff',
         padding: '10px',
    },

    navList:{
        listStyle: 'none',
        display: 'flex,',
        margin: 0,
        padding:0,
    },

    navItem:{
        marginRight:'15px', 
    },

    navLink:{
        color:'white',
        textDecoration:'none',
        fontWeigth:'bold',
    }
};

export default Navbar;
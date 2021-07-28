import React from 'react'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap'
import Icon from '../images/icon.png'

export default function DefaultLayout({ children }) {
  return (
    <>
      <header>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <img src={Icon} width="40" alt="Logo" />
            </NavbarBrand>
            <NavbarText><strong>La Tienda</strong></NavbarText>
          </div>
        </Navbar>
      </header>
      <main className="container pt-4 pb-4">{children}</main>
      <footer className="text-center text-lg-start bg-light text-muted">
        <div
          className="text-center p-4"         
        >
          <span>© 2021 La Tienda, Inc. Todos los derechos reservados.</span>
        </div>
      </footer>
    </>
  )
}

import { Fragment } from "react"
import Link from "next/link"
const Layout = ({ children }) => {
  return <Fragment>
    <div id="wrapper">
      <div id="header" className="transparent_header_off" data-color="">
        <div className="header_top_bar" style={{ backgroundColor: "#333333" }}>
          <div className="container">
            <div className="clearfix">
              <div className="pull-left language-switcher-unit">
                <div className="stm_current_language dropdown_toggle" id="lang_dropdown" data-toggle="dropdown">
                  English s<i className="fa fa-chevron-down"></i>
                </div>
                <ul className="dropdown-menu lang_dropdown_menu" role="menu" aria-labelledby="lang_dropdown">
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="/courses/?view_type=list#de">Deutsch</a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="/courses/?view_type=list#it">Italian</a>
                  </li>
                </ul>
              </div>
              <div className="pull-right">
                <div className="header_login_url">
                  <a href="/my-account/">
                    <i className="fa fa-user"></i>Login
                  </a>
                  <span className="vertical_divider"></span>
                  <a href="/my-account/">Register</a>
                </div>
              </div>
              <div className="pull-right">
                <div className="header_top_bar_socs">
                  <ul className="clearfix"></ul>
                </div>
              </div>
              <div className="pull-right xs-pull-left">
                <ul className="top_bar_info clearfix">
                  <li className="hidden-info">
                    <i className="far fa-clock"></i>
                    Mon - Sat 8.00 - 18.00
                  </li>
                  <li className="hidden-info">
                    <i className="fa fa-map-marker-alt"></i>
                    1010 Moon ave, New York,NY US
                  </li>
                  <li className="hidden-info">
                    <i className="fa fa-phone"></i>
                    +1 212-226-3126
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header_default header_default">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="logo-unit">
                  <a href="/">
                    <img className="img-responsive logo_transparent_static visible" src="/images/logo.png" style={{ width: "253px" }} alt="MasterStudy – Education Center WordPress Theme" />
                  </a>
                </div>
                <button type="button" className="navbar-toggle collapsed hidden-lg hidden-md" data-toggle="collapse" data-target="#header_menu_toggler">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="col-xs-12 col-sm-12 visible-xs visible-sm">
                <div className="collapse navbar-collapse header-menu-mobile" id="header_menu_toggler">
                  <ul className="header-menu clearfix">
                    <li id="menu-item-3293" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3293">
                      <Link href="/">Home</Link>
                      <div className="magic_line"
                        style={{ maxWidth: "0px" }}></div>
                    </li>
                    <li id="menu-item-756" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children current-menu-item current_page_item menu-item-756">
                      <Link href="/courses" aria-current="page">Courses</Link>
                      <span className="arrow">
                        <i className="fa fa-angle-right"></i>
                      </span>
                      <ul className="sub-menu">
                        <li id="menu-item-1144" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-1144">
                          <a href="/courses/" aria-current="page">Courses – Grid Layout</a>
                        </li>
                        <li id="menu-item-1096" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1096">
                          <a href="/courses/?view_type=list" aria-current="page">Courses – Listing Layout</a>
                        </li>
                        <li id="menu-item-1150" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-1150">
                          <a href="//">SingleCourse Layout</a>
                        </li>
                      </ul>
                      <div className="magic_line"
                        style={{ maxWidth: "0px" }}></div>
                    </li>

                    <li>
                      <form role="search" method="get" id="searchform-mobile" action="/">
                        <div className="search-wrapper">
                          <input placeholder="Search..." type="text" className="form-control search-input" value="" name="s" />
                          <button type="submit" className="search-submit">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </form>
                      <div className="magic_line"
                        style={ { maxWidth: "0px" }}></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-9 col-sm-9 col-sm-offset-0 hidden-xs hidden-sm">
                <div className="stm_menu_toggler" data-text="Menu"></div>
                <div className="header_main_menu_wrapper clearfix"
                  style={{ marginTop: "11px" }}>
                  <div className="pull-right hidden-xs right_buttons">
                    <div className="search-toggler-unit">
                      <div className="search-toggler" data-toggle="modal" data-target="#searchModal">
                        <i className="fa fa-search"></i>
                      </div>
                    </div>
                    <div className="pull-right">
                      <div className="header_top_bar_socs">
                        <ul className="clearfix"></ul>
                      </div>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse pull-right">
                    <ul className="header-menu clearfix">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3293">
                        <Link href="/">Home</Link>
                        <div className="magic_line"
                          style={{ maxWidth: "45.9062px" }}></div>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children current-menu-item current_page_item menu-item-756">
                        <Link href="/courses/" aria-current="page">Courses</Link>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-1144">
                            <a href="/courses/" aria-current="page">Courses – Grid Layout</a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1096">
                            <a href="/courses/?view_type=list" aria-current="page">Courses – Listing Layout</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-1150">
                            <a href="//">Single Course Layout</a>
                          </li>
                        </ul>
                        <div className="magic_line line_visible"
                          style={{ maxWidth: "70.4531px" }}></div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {children}

    <footer id="footer">
      <div className="footer_wrapper">
        <div id="footer_top">
          <div className="footer_widgets_wrapper">
            <div className="container">
              <div className="widgets cols_4 clearfix">
                <aside id="text-4" className="widget widget_text">
                  <div className="widget_title">
                    <h3>About Us</h3>
                  </div>
                  <div className="textwidget">
                    <p>The Masterstudy Education Center is complete and an integral part of Local Education in Washington!</p>
                    <p>
                      <a className="btn btn-default" href="/">learning now</a>
                    </p>
                  </div>
                </aside>
                <aside id="stm_pages-2" className="widget widget_pages">
                  <div className="widget_title">
                    <h3>Quick links</h3>
                  </div>
                  <ul className="style_1">
                    <li className="page_item page-item-1217">
                      <a href="/alerts-and-stuff/">
                        <span className="h6">Alerts and stuffs</span>
                      </a>
                    </li>
                    <li className="page_item page-item-1376">
                      <a href="/custom-shortcodes/">
                        <span className="h6">Custom shortcodes</span>
                      </a>
                    </li>
                    <li className="page_item page-item-779">
                      <a href="/pricing-plans/">
                        <span className="h6">Pricing Plans</span>
                      </a>
                    </li>
                    <li className="page_item page-item-1245">
                      <a href="/typography/">
                        <span className="h6">Typography</span>
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside id="contacts-2" className="widget widget_contacts">
                  <div className="widget_title">
                    <h3>Contact Us</h3>
                  </div>
                  <ul className="widget_contacts_style_1">
                    <li className="widget_contacts_address">
                      <div className="icon">
                        <i className="fa-icon-stm_icon_pin"></i>
                      </div>
                      <div className="text">Best Avenue 16-2, CA 23653, USA</div>
                    </li>
                    <li className="widget_contacts_phone">
                      <div className="icon">
                        <i className="fa-icon-stm_icon_phone"></i>
                      </div>
                      <div className="text">+1 998 71 150 30 20</div>
                    </li>
                    <li className="widget_contacts_fax">
                      <div className="icon">
                        <i className="fa-icon-stm_icon_fax"></i>
                      </div>
                      <div className="text">+1 998 71 150 30 20</div>
                    </li>
                    <li className="widget_contacts_email">
                      <div className="icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="text">
                        <a href="mailto:info@stylemixthemes.com">info@stylemixthemes.com</a>
                      </div>
                    </li>
                  </ul>
                </aside>
                <aside id="socials-2" className="widget widget_socials">
                  <div className="widget_title">
                    <h3>Social Network</h3>
                  </div>
                  <div className="socials_widget_wrapper">
                    <ul className="widget_socials list-unstyled clearfix">
                      <li className="simple_flip_container">
                        <div className="simple_flipper">
                          <div className="front">
                            <a href="https://www.facebook.com/" target="_blank" className="facebook">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </div>
                          <div className="back">
                            <a href="https://www.facebook.com/" target="_blank">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="simple_flip_container">
                        <div className="simple_flipper">
                          <div className="front">
                            <a href="https://www.twitter.com/" target="_blank" className="twitter">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                          <div className="back">
                            <a href="https://www.twitter.com/" target="_blank">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="simple_flip_container">
                        <div className="simple_flipper">
                          <div className="front">
                            <a href="https://www.instagram.com/" target="_blank" className="instagram">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                          <div className="back">
                            <a href="https://www.instagram.com/" target="_blank">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-8">
                <div className="clearfix">
                  <div className="pull-left">
                    <img className="footer_logo" src="./list_files/footer-logo2x-50x56.png" alt="Footer logo" />
                  </div>
                  <div className="copyright_text">
                    Copyright © 2020.
                    <a target="_blank" href="/"> MasterStudy</a>
                    Theme by <a target="_blank" href="/">StylemixThemes</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-4">
                <div className="clearfix">
                  <div className="pull-right xs-pull-left">
                    <div className="pull-right">
                      <div className="copyright_socials">
                        <ul className="clearfix"></ul>
                      </div>
                    </div>
                  </div>
                  <div className="pull-right xs-pull-left hidden-sm hidden-xs">
                    <ul className="footer_menu heading_font clearfix">
                      <li id="menu-item-3121" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3121">
                        <a href="/">home</a>
                      </li>
                      <li id="menu-item-3122" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-3122">
                        <a href="/courses/" aria-current="page">courses</a>
                      </li>
                      <li id="menu-item-3123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3123">
                        <a href="/blog/">blog</a>
                      </li>
                      <li id="menu-item-637" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-637">
                        <a href="/events/">events</a>
                      </li>
                      <li id="menu-item-3124" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3124">
                        <a href="/gallery-one/">gallery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
}

export default Layout

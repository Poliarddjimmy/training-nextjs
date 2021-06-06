import { Fragment } from "react"
import Link from "next/link"
const Layout = ({ children }) => {
  return <Fragment>
    <div id="wrapper">
      <div id="header" class="transparent_header_off" data-color="">
        <div class="header_top_bar" style={{ backgroundColor: "#333333" }}>
          <div class="container">
            <div class="clearfix">
              <div class="pull-left language-switcher-unit">
                <div class="stm_current_language dropdown_toggle" id="lang_dropdown" data-toggle="dropdown">
                  English s<i class="fa fa-chevron-down"></i>
                </div>
                <ul class="dropdown-menu lang_dropdown_menu" role="menu" aria-labelledby="lang_dropdown">
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="/courses/?view_type=list#de">Deutsch</a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="/courses/?view_type=list#it">Italian</a>
                  </li>
                </ul>
              </div>
              <div class="pull-right">
                <div class="header_login_url">
                  <a href="/my-account/">
                    <i class="fa fa-user"></i>Login
                  </a>
                  <span class="vertical_divider"></span>
                  <a href="/my-account/">Register</a>
                </div>
              </div>
              <div class="pull-right">
                <div class="header_top_bar_socs">
                  <ul class="clearfix"></ul>
                </div>
              </div>
              <div class="pull-right xs-pull-left">
                <ul class="top_bar_info clearfix">
                  <li class="hidden-info">
                    <i class="far fa-clock"></i>
                    Mon - Sat 8.00 - 18.00
                  </li>
                  <li class="hidden-info">
                    <i class="fa fa-map-marker-alt"></i>
                    1010 Moon ave, New York,NY US
                  </li>
                  <li class="hidden-info">
                    <i class="fa fa-phone"></i>
                    +1 212-226-3126
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header_default header_default">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-12 col-xs-12">
                <div class="logo-unit">
                  <a href="/">
                    <img class="img-responsive logo_transparent_static visible" src="./list_files/logo-colored.png" style={{ width: "253px" }} alt="MasterStudy – Education Center WordPress Theme" />
                  </a>
                </div>
                <button type="button" class="navbar-toggle collapsed hidden-lg hidden-md" data-toggle="collapse" data-target="#header_menu_toggler">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="col-xs-12 col-sm-12 visible-xs visible-sm">
                <div class="collapse navbar-collapse header-menu-mobile" id="header_menu_toggler">
                  <ul class="header-menu clearfix">
                    <li id="menu-item-3293" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3293">
                      <Link href="/">Home</Link>
                      <div class="magic_line"
                        style={{ maxWidth: "0px" }}></div>
                    </li>
                    <li id="menu-item-756" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children current-menu-item current_page_item menu-item-756">
                      <Link href="/courses" aria-current="page">Courses</Link>
                      <span class="arrow">
                        <i class="fa fa-angle-right"></i>
                      </span>
                      <ul class="sub-menu">
                        <li id="menu-item-1144" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-1144">
                          <a href="/courses/" aria-current="page">Courses – Grid Layout</a>
                        </li>
                        <li id="menu-item-1096" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1096">
                          <a href="/courses/?view_type=list" aria-current="page">Courses – Listing Layout</a>
                        </li>
                        <li id="menu-item-1150" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1150">
                          <a href="//">SingleCourse Layout</a>
                        </li>
                      </ul>
                      <div class="magic_line"
                        style={{ maxWidth: "0px" }}></div>
                    </li>

                    <li>
                      <form role="search" method="get" id="searchform-mobile" action="/">
                        <div class="search-wrapper">
                          <input placeholder="Search..." type="text" class="form-control search-input" value="" name="s" />
                          <button type="submit" class="search-submit">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </form>
                      <div class="magic_line"
                        style={ { maxWidth: "0px" }}></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-9 col-sm-9 col-sm-offset-0 hidden-xs hidden-sm">
                <div class="stm_menu_toggler" data-text="Menu"></div>
                <div class="header_main_menu_wrapper clearfix"
                  style={{ marginTop: "11px" }}>
                  <div class="pull-right hidden-xs right_buttons">
                    <div class="search-toggler-unit">
                      <div class="search-toggler" data-toggle="modal" data-target="#searchModal">
                        <i class="fa fa-search"></i>
                      </div>
                    </div>
                    <div class="pull-right">
                      <div class="header_top_bar_socs">
                        <ul class="clearfix"></ul>
                      </div>
                    </div>
                  </div>
                  <div class="collapse navbar-collapse pull-right">
                    <ul class="header-menu clearfix">
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3293">
                        <Link href="/">Home</Link>
                        <div class="magic_line"
                          style={{ maxWidth: "45.9062px" }}></div>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children current-menu-item current_page_item menu-item-756">
                        <Link href="/courses/" aria-current="page">Courses</Link>
                        <ul class="sub-menu">
                          <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-1144">
                            <a href="/courses/" aria-current="page">Courses – Grid Layout</a>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1096">
                            <a href="/courses/?view_type=list" aria-current="page">Courses – Listing Layout</a>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1150">
                            <a href="//">Single Course Layout</a>
                          </li>
                        </ul>
                        <div class="magic_line line_visible"
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
      <div class="footer_wrapper">
        <div id="footer_top">
          <div class="footer_widgets_wrapper">
            <div class="container">
              <div class="widgets cols_4 clearfix">
                <aside id="text-4" class="widget widget_text">
                  <div class="widget_title">
                    <h3>About Us</h3>
                  </div>
                  <div class="textwidget">
                    <p>The Masterstudy Education Center is complete and an integral part of Local Education in Washington!</p>
                    <p>
                      <a class="btn btn-default" href="/">learning now</a>
                    </p>
                  </div>
                </aside>
                <aside id="stm_pages-2" class="widget widget_pages">
                  <div class="widget_title">
                    <h3>Quick links</h3>
                  </div>
                  <ul class="style_1">
                    <li class="page_item page-item-1217">
                      <a href="/alerts-and-stuff/">
                        <span class="h6">Alerts and stuffs</span>
                      </a>
                    </li>
                    <li class="page_item page-item-1376">
                      <a href="/custom-shortcodes/">
                        <span class="h6">Custom shortcodes</span>
                      </a>
                    </li>
                    <li class="page_item page-item-779">
                      <a href="/pricing-plans/">
                        <span class="h6">Pricing Plans</span>
                      </a>
                    </li>
                    <li class="page_item page-item-1245">
                      <a href="/typography/">
                        <span class="h6">Typography</span>
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside id="contacts-2" class="widget widget_contacts">
                  <div class="widget_title">
                    <h3>Contact Us</h3>
                  </div>
                  <ul class="widget_contacts_style_1">
                    <li class="widget_contacts_address">
                      <div class="icon">
                        <i class="fa-icon-stm_icon_pin"></i>
                      </div>
                      <div class="text">Best Avenue 16-2, CA 23653, USA</div>
                    </li>
                    <li class="widget_contacts_phone">
                      <div class="icon">
                        <i class="fa-icon-stm_icon_phone"></i>
                      </div>
                      <div class="text">+1 998 71 150 30 20</div>
                    </li>
                    <li class="widget_contacts_fax">
                      <div class="icon">
                        <i class="fa-icon-stm_icon_fax"></i>
                      </div>
                      <div class="text">+1 998 71 150 30 20</div>
                    </li>
                    <li class="widget_contacts_email">
                      <div class="icon">
                        <i class="fa fa-envelope"></i>
                      </div>
                      <div class="text">
                        <a href="mailto:info@stylemixthemes.com">info@stylemixthemes.com</a>
                      </div>
                    </li>
                  </ul>
                </aside>
                <aside id="socials-2" class="widget widget_socials">
                  <div class="widget_title">
                    <h3>Social Network</h3>
                  </div>
                  <div class="socials_widget_wrapper">
                    <ul class="widget_socials list-unstyled clearfix">
                      <li class="simple_flip_container">
                        <div class="simple_flipper">
                          <div class="front">
                            <a href="https://www.facebook.com/" target="_blank" class="facebook">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </div>
                          <div class="back">
                            <a href="https://www.facebook.com/" target="_blank">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="simple_flip_container">
                        <div class="simple_flipper">
                          <div class="front">
                            <a href="https://www.twitter.com/" target="_blank" class="twitter">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </div>
                          <div class="back">
                            <a href="https://www.twitter.com/" target="_blank">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="simple_flip_container">
                        <div class="simple_flipper">
                          <div class="front">
                            <a href="https://www.instagram.com/" target="_blank" class="instagram">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                          <div class="back">
                            <a href="https://www.instagram.com/" target="_blank">
                              <i class="fab fa-instagram"></i>
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
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-8">
                <div class="clearfix">
                  <div class="pull-left">
                    <img class="footer_logo" src="./list_files/footer-logo2x-50x56.png" alt="Footer logo" />
                  </div>
                  <div class="copyright_text">
                    Copyright © 2020.
                    <a target="_blank" href="/"> MasterStudy</a>
                    Theme by <a target="_blank" href="/">StylemixThemes</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-4">
                <div class="clearfix">
                  <div class="pull-right xs-pull-left">
                    <div class="pull-right">
                      <div class="copyright_socials">
                        <ul class="clearfix"></ul>
                      </div>
                    </div>
                  </div>
                  <div class="pull-right xs-pull-left hidden-sm hidden-xs">
                    <ul class="footer_menu heading_font clearfix">
                      <li id="menu-item-3121" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3121">
                        <a href="/">home</a>
                      </li>
                      <li id="menu-item-3122" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-3122">
                        <a href="/courses/" aria-current="page">courses</a>
                      </li>
                      <li id="menu-item-3123" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3123">
                        <a href="/blog/">blog</a>
                      </li>
                      <li id="menu-item-637" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-637">
                        <a href="/events/">events</a>
                      </li>
                      <li id="menu-item-3124" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3124">
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

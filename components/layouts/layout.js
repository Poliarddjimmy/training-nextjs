import { Fragment, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link"
import { useRouter } from "next/router"
import { logoutAction } from "../../redux/actions/userAction"
import { useToasts } from 'react-toast-notifications';
import Modal from 'react-modal';

const Layout = ({ children }) => {

  const currentUser = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()
  const { addToast } = useToasts();
  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const logout = () => {
    try {
      dispatch(logoutAction())
      addToast('You are logged out', { appearance: 'success', autoDismiss: true, });
      router.push('/login')
    } catch (error) {
      addToast(error.message, { appearance: 'error', autoDismiss: true, });
    }
  }

  const customStyles = {
    content: {
      top: '20.5%',
      right: '11%',
      left: 'auto',
      bottom: 'auto',
      width: '160px',
      backgroundColor: '#ECF0F1',
      // boxShadow: '1px 1px 1px 2px rgba(239,183,103,0.5)',
      fontSize: '1.1em',
      borderWidth: '0.5px',
      borderColor: '#DEE2E6',
      zIndex: 1
      // transform: 'translate(-50%, -50%)'
    },
    overlay: {
      backgroundColor: 'transparent !important'
    },
  };

  return <Fragment>
    <div id="wrapper">
      <div id="header" className="transparent_header_off" data-color="">
        <div className="header_top_bar pr-5" style={{ backgroundColor: "#333333" }}>
          <div className="container">
            <div className="clearfix">
              <div className="pull-left language-switcher-unit">
                <div className="stm_current_language dropdown_toggle" id="lang_dropdown" data-toggle="dropdown">
                  English <i className="fa fa-chevron-down"></i>
                </div>
              </div>
              <div className="pull-right">
                <div className="header_login_url">
                  {currentUser ?
                    <>
                      <span className="cursor-pointer" onClick={logout}>Logout</span>
                    </>
                    :
                    <>
                      <a><i className="fa fa-user"></i><Link href="/login"> Login</Link></a>
                      <span className="vertical_divider"></span>
                      <Link href="/register">Register</Link>
                    </>
                  }
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
                    <i className="fa fa-phone"></i>
                    +1 849 210 7910
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
                  <Link href="/">
                    <img className="img-responsive logo_transparent_static visible cursor-pointer" src="/images/logo.png" style={{ width: "253px" }} alt="MasterStudy – Education Center WordPress Theme" />
                  </Link>
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
                          <input placeholder="Search..." type="text" className="form-control search-input" />
                          <button type="submit" className="search-submit">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </form>
                      <div className="magic_line"
                        style={{ maxWidth: "0px" }}></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-9 col-sm-9 col-sm-offset-0 hidden-xs hidden-sm">
                <div className="stm_menu_toggler" data-text="Menu"></div>
                <div className="header_main_menu_wrapper clearfix" style={{ marginTop: "11px" }}>
                  {/* <div className="pull-right hidden-xs right_buttons">
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
                  </div> */}
                  <div className="collapse navbar-collapse pull-right">
                    <ul className="header-menu clearfix align-items-center justify-content-center d-flex">
                      <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3293 ${router.pathname === '/' ? 'current-menu-item current_page_item current-menu-parent current_page_parent current_page_ancestor current-menu-ancestor' : ''}`}>
                        <Link href="/">Home</Link>
                        <div className="magic_line"
                          style={{ maxWidth: "45.9062px" }}></div>
                      </li>
                      <li className="">
                        <Link href="/courses/" aria-current="page">Courses</Link>
                      </li>

                      {currentUser &&
                        <li className="cursor-pointer">
                          <div className="collapse navbar-collapse pull-right mr-4" onClick={openModal}>
                            <div className="bg-light text-dark  p-3" style={{ borderRadius: '30px' }}>
                              <i className="fa-icon-stm_icon_user text-dark mr-2" ></i>
                              Hello, {currentUser.name?.substr(0, 8)}{currentUser.name?.length > 8 && '...'}
                              <i className="fa fa-chevron-circle-down ml-1" ></i>
                            </div>
                          </div>
                        </li>
                      }

                    </ul>

                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <div className="">
                        <Link href="/dashboard"><b className="cursor-pointer d-block mb-2"><i className="fa fa-hashtag mr-2"></i> Dashboard</b></Link>
                        <Link href="/dashboard/courses"><b className="cursor-pointer d-block mr-2"><i className="fa fa-book mr-2"></i> My Courses</b></Link>
                        <hr className="border-dark" />
                        <b className="cursor-pointer d-flex justify-content-center align-items-center" onClick={logout}> Logout</b>
                      </div>

                    </Modal>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="main" style={{ marginBottom: "386px", }}>

      {children}
    </div>

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
                    <p>LearnHt is complete platform e-learning</p>
                    <p>
                      <Link href="/courses"><a className="btn btn-default">learning now</a></Link>
                    </p>
                  </div>
                </aside>
                <aside id="stm_pages-2" className="widget widget_pages">
                  <div className="widget_title">
                    <h3>Quick links</h3>
                  </div>
                  <ul className="style_1">
                    <li className="page_item page-item-1217">
                      <Link href="/courses">
                        <a className="h6">Courses</a>
                      </Link>
                    </li>
                    <li className="page_item page-item-1376">
                      <Link href="/login">
                        <a className="h6">Account</a>
                      </Link>
                    </li>
                    <li className="page_item page-item-779">
                      <Link href="/register">
                        <a className="h6">Create an account</a>
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside id="contacts-2" className="widget widget_contacts">
                  <div className="widget_title">
                    <h3>Contact Us</h3>
                  </div>
                  <ul className="widget_contacts_style_1">
                    <li className="widget_contacts_phone">
                      <div className="icon">
                        <i className="fa-icon-stm_icon_phone"></i>
                      </div>
                      <div className="text">+1 849 210 7910</div>
                    </li>
                    <li className="widget_contacts_email">
                      <div className="icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="text">
                        <a href="mailto:info@learnht.com">info@learnht.com</a>
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
                  <div className="copyright_text">
                    Copyright © {(new Date()).getFullYear()}.
                    <a target="_blank" href="/"> LearnHt</a>
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
                  {/* <div className="pull-right xs-pull-left hidden-sm hidden-xs">
                    <ul className="footer_menu heading_font clearfix">
                      <li id="menu-item-3121" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3121">
                        <a href="/">home</a>
                      </li>
                      <li id="menu-item-3122" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-3122">
                        <a href="/" aria-current="page">courses</a>
                      </li>
                      <li id="menu-item-3123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3123">
                        <a href="/">blog</a>
                      </li>
                      <li id="menu-item-637" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-637">
                        <a href="/">events</a>
                      </li>
                      <li id="menu-item-3124" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3124">
                        <a href="/">gallery</a>
                      </li>
                    </ul>
                  </div> */}
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

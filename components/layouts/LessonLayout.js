import { Fragment } from "react"
import Link from "next/link"
const LessonLayout = ({ children }) => {
  return <Fragment>
    <div id="wrapper">
      <div id="header" className="border-bottom pb-3 transparent_header_off" data-color="">
        <div className="header_default header_default align-items-center">
          <div className="containeri pl-4 pr-4 align-items-center">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-12 col-xs-12 align-items-center">
                <div className="logo-unit">
                  <a href="/">
                    <img className="img-responsive logo_transparent_static visible" src="/images/logo.png" style={{ width: "253px" }} alt="MasterStudy – Education Center WordPress Theme" />
                  </a>
                </div>
              </div>
              <div className="col-md-6   align-items-center">
                <h3>Course name</h3>
                <span className="align-items-center d-flex" style={{ fontFamily: "Open Sans", fontSize: "14px" }}>
                  <i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                  Back to dashboard
                </span>
              </div>

              <div className="col-md-3 ">
                <div className="header_main_menu_wrapper clearfix" style={{ marginTop: "11px" }}>
                  <div className="pull-right hidden-xs right_buttons ml-3" style={{ marginTop: "10px", }}>
                    <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="pull-right hidden-xs right_buttons ml-3 mr-3" style={{ marginTop: "10px", }}>
                    <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="collapse navbar-collapse pull-right mr-4" >
                    <div className="bg-light p-3" style={{ borderRadius: '30px' }}>
                      <i class="fa fa-user mr-2" aria-hidden="true"></i>
                      Hello, Djimmy Po...
                      <i class="fa fa-chevron-circle-down ml-1" aria-hidden="true"></i>
                    </div>
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


        <div id="footer_copyright">
          <div className="container">
            <div className="row p-4">
              <div className="col-md-4 d-flex align-items-center" style={{ fontSize: "18px" }}>
                <span className="text-white border d-flex justify-content-center align-items-center rounded-circle p-2 mr-2" style={{ width: "45px" }} >
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </span>
                <span className="text-white fa-1x">Privious lesson title</span>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center ">
                  ere
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end align-items-center " style={{ fontSize: "18px" }}>

                <span className="text-white fa-1x">Next lesson title</span>
                  <span className="text-white border d-flex justify-content-center align-items-center rounded-circle p-2 ml-2" style={{ width: "45px" }} >
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
}

export default LessonLayout
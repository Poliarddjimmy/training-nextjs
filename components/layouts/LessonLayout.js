import { useState, useEffect, Fragment } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { useRouter } from "next/router";
import { completedByMeAction } from "../../redux/actions/userAction"
import { lessonCompletedAction } from "../../redux/actions/lessonAction"

const LessonLayout = ({ children, previous, next, previousChapter, nextChapter, user, lesson, course }) => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { addToast } = useToasts();

  const [completed, setCompleted] = useState()

  useEffect(() => {
    dispatch(completedByMeAction(router.query?.slug))
      .then(res =>
        setCompleted(res.payload?.data)
      )
  }, [])

  useEffect(() => {
    router.query?.slug && dispatch(completedByMeAction(router.query?.slug))
      .then(res =>
        setCompleted(res.payload?.data)
      )
  }, [router.query?.slug])

  useEffect(() => {
    completed && setCompleted(completed)
  }, [completed])

  const incomplete = () => {
    addToast("Please complete this lesson before move to the next", { appearance: 'warning', autoDismiss: true, });
  }

  const completedThis = () => {
    const payload = {
      lesson_user: {
        user_id: user,
        lesson_id: lesson,
      }
    }
    dispatch(lessonCompletedAction(payload))
      .then(res =>
        setCompleted(res.payload?.data)
      )
  }

  const goToTheNextLesson = (lesson) => {
    router.push(`/courses/lessons/${lesson}`)
  }

  return <Fragment>
    <div id="wrapper">
      <div id="header" className="border-bottom pb-3 transparent_header_off" data-color="">
        <div className="header_default header_default align-items-center">
          <div className="containeri pl-4 pr-4 align-items-center">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-12 col-xs-12 align-items-center">
                <div className="logo-unit cursor-pointer">
                  <Link href="/">
                    <img className="img-responsive logo_transparent_static visible" src="/images/logo.png" style={{ width: "253px" }} alt="MasterStudy – Education Center WordPress Theme" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6   align-items-center">
                <h3>Course: {course}</h3>
                <span className="align-items-center d-flex" style={{ fontFamily: "Open Sans", fontSize: "14px" }}>
                  <i className="fa fa-arrow-left mr-2" ></i>
                  Go to the dashboard
                </span>
              </div>

              <div className="col-md-3 ">
                <div className="header_main_menu_wrapper clearfix" style={{ marginTop: "11px" }}>
                  <div className="pull-right hidden-xs right_buttons ml-3" style={{ marginTop: "10px", }}>
                    <i className="fa fa-cog fa-2x" ></i>
                  </div>
                  <div className="pull-right hidden-xs right_buttons ml-3 mr-3" style={{ marginTop: "10px", }}>
                    <i className="fa fa-heart fa-2x" ></i>
                  </div>
                  <div className="collapse navbar-collapse pull-right mr-4" >
                    <div className="bg-light p-3" style={{ borderRadius: '30px' }}>
                      <i className="fa-icon-stm_icon_user mr-2" ></i>
                      Hello, Djimmy Po...
                      <i className="fa fa-chevron-circle-down ml-1" ></i>
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
              <div className="col-md-4 ">
                {previous ? <Link href={`/courses/lessons/${previous}`}>
                  <span className="d-flex align-items-center cursor-pointer" style={{ fontSize: "18px" }}>
                    <span className="text-white border d-flex justify-content-center align-items-center rounded-circle p-2 mr-2 bg-warning" style={{ width: "45px", height: "45px" }} >
                      <i className="fa fa-chevron-left" ></i>
                    </span>
                    <span className="text-white-50 fa-1x">{previous}</span>
                  </span>
                </Link>
                  :
                  previousChapter &&
                  <Link href={`/courses/lessons/${previousChapter?.lesson}`}>
                    <span className="d-flex align-items-center cursor-pointer" style={{ fontSize: "18px" }}>
                      <span className="text-white border d-flex justify-content-center align-items-center rounded-circle p-2 mr-2 bg-warning" style={{ width: "45px", height: "45px" }} >
                        <i className="fa fa-chevron-left" ></i>
                      </span>
                      <span className="d-flex flex-column text-white">
                        <strong className="d-block text-warning"><span className="text-white-50">Chapter:</span> {previousChapter?.chapter}</strong>
                        <span className="text-white-50 fa-1x">{previousChapter?.lesson}</span>
                      </span>
                    </span>
                  </Link>
                }
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center" title={!completed ? 'Click on to complete this lesson' : ''}>
                  <span onClick={()=>!completed && completedThis()} className={`text-white border d-flex justify-content-center align-items-center cursor-pointer rounded-circle p-2 ml-2 bg-${completed ? 'warning' : 'default'}`} style={{ width: "55px", height: "55px" }}>
                    <i className="fa fa-check fa-2x" ></i>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  {next ? <span onClick={() => completed ? goToTheNextLesson(next) : incomplete()}>
                    <span className="d-flex justify-content-end align-items-center cursor-pointer" style={{ fontSize: "18px" }}>
                      <span className="text-white-50 fa-1x">{next}</span>
                      <span className={`text-white border d-flex justify-content-center align-items-center rounded-circle p-2 ml-2 bg-${completed ? 'warning' : 'default'}`} style={{ width: "45px", height: "45px" }} >
                        <i className="fa fa-chevron-right" ></i>
                      </span>
                    </span>
                  </span>
                    :
                    nextChapter &&
                    <span onClick={() => completed ? goToTheNextLesson(nextChapter?.lesson) : incomplete()}>
                      <span className="d-flex justify-content-end align-items-center cursor-pointer" style={{ fontSize: "18px" }}>
                        <span className="d-flex flex-column text-white">
                          <strong className="d-block text-warning"><span className="text-white-50">Chapter:</span> {nextChapter?.chapter}</strong>
                          <span className="text-white-50 fa-1x">{nextChapter?.lesson}</span>
                        </span>
                        <span className={`text-white border d-flex justify-content-center align-items-center rounded-circle p-2 ml-2 bg-${completed ? 'warning' : 'default'}`} style={{ width: "45px", height: "45px" }} >
                          <i className="fa fa-chevron-right" ></i>
                        </span>
                      </span>
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment >
}

export default LessonLayout

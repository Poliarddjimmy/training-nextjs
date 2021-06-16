import { useState, useEffect } from "react";
import LessonLayout from "../../../components/layouts/LessonLayout"
import { useDispatch, useSelector } from "react-redux";
import { showLessonAction } from "../../../redux/actions/lessonAction";
import { useRouter } from "next/router";
import { courseAccessAction } from "../../../redux/actions/courseAction"

import Modal from 'react-modal';
import Link from "next/link";
const Lesson = () => {

  const lesson = useSelector(state => state.lesson.lesson)
  const currentUser = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch()
  const router = useRouter()

  const [access, setAccess] = useState()

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch(showLessonAction(router.query?.slug))
  }, [])

  useEffect(() => {
    router.query?.slug && dispatch(showLessonAction(router.query?.slug))
  }, [router.query?.slug])

  useEffect(() => {
    lesson && dispatch(courseAccessAction(lesson?.course?.slug))
      .then(res => {
        if (res.payload?.data === false) {
          router.push(`/courses/${lesson?.course?.slug}?warning=butitfirst`);
        }
      }
      )
  }, [lesson])


  useEffect(() => {
    !currentUser && router.push("/login");
  }, [currentUser])

  const customStyles = {
    content: {
      top: '20%',
      left: '20px',
      right: 'auto',
      bottom: 'auto',
      maxWidth: '310px',
      minWidth: '250px',
      backgroundColor: '#fff',
      boxShadow: '1px 1px 1px 2px rgba(239,183,103,0.5)',
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

  return (
    <LessonLayout
      user={currentUser?.id}
      lesson={lesson?.id}
      next={lesson?.next_lesson}
      previous={lesson?.previous_lesson}
      previousChapter={lesson?.previous_lesson_by_chapter}
      nextChapter={lesson?.next_lesson_by_chapter}
      course={lesson?.course.name}
    >
      <div className="p-4 d-flex justify-content-between align-items-center">
        <div>
          <i onClick={openModal} className="cursor-pointer bg-dark p-3 text-white rounded-circle fa fa-list-ul fa-1x" ></i>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h3>Other Lessons</h3>
            <hr style={{ borderWidth: '3px', }} />
            {
              lesson?.course?.chapters.map((chapter, idx) =>
                <div key={chapter.slug}>
                  <strong>{idx + 1} - {chapter.title}</strong>
                  {chapter.lessons.map((lesson, index) =>
                    <div key={index} className="ml-3 mb-2 mt-1 cursor-pointer">
                      <Link href={`/courses/lessons/${lesson.slug}`}>
                        <span className={router.query.slug === lesson.slug ? 'text-warning text-decoration-underline' : ''}> {idx + 1}.{index + 1} - {lesson.title}</span>
                      </Link>
                    </div>
                  )}
                  {/* <hr style={{ borderWidth: '3px', }} /> */}
                </div>
              )
            }
          </Modal>
        </div>
        <div>
          <i className="bg-dark p-3 text-white rounded-circle fa fa-question fa-1x" ></i>
        </div>
      </div>

      <div className="container" style={{ minHeight: "50vh" }}>
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12">
              <h2 className="text-capitalize" style={{ fontFamily: "Montserrat", color: "#273044" }}>{lesson?.chapter?.title}</h2>
              <h1 className="text-capitalize" style={{ fontFamily: "Montserrat" }}> {lesson?.title} </h1>
              <div className="mt-5" style={{ fontFamily: "Open Sans", fontSize: "18px" }}>
                <p>{lesson?.description}</p>
                <hr />
                <p>{lesson?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
export default Lesson
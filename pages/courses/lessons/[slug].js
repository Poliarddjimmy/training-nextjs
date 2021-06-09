import { useState, useEffect } from "react";
import LessonLayout from "../../../components/layouts/LessonLayout"
import { useDispatch, useSelector } from "react-redux";
import { showLessonAction } from "../../../redux/actions/lessonAction";
import { useRouter } from "next/router";

const Lesson = () => {

  const lesson = useSelector(state => state.lesson.lesson)
  const currentUser = useSelector(state=> state.user.currentUser)

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    !currentUser && router.push("/login");
    router.query?.slug && dispatch(showLessonAction(router.query?.slug))
  }, [router.query?.slug, currentUser])

  return (
    <LessonLayout next={lesson?.next_lesson} previous={lesson?.previous_lesson}>
      <div className="p-4 d-flex justify-content-between align-items-center">
        <div>
          <i className="bg-dark p-3 text-white rounded-circle fa fa-list-ul fa-1x" ></i>
        </div>
        <div>
          <i className="bg-dark p-3 text-white rounded-circle fa fa-question fa-1x" ></i>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12">
              <h2 className="text-capitalize" style={{ fontFamily: "Montserrat", color: "#273044" }}>{lesson?.chapter.title}</h2>
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
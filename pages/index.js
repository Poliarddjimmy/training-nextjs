import { useState, useEffect } from "react";
import Link from "next/link"
import dynamic from 'next/dynamic'
import { fetchUsersAction } from "../redux/actions/userAction";
import { fetchCoursesAction } from "../redux/actions/courseAction";
import { fetchLessonsAction } from "../redux/actions/lessonAction";
import { useDispatch, useSelector } from "react-redux";
const Layout = dynamic(() => import('../components/layouts/layout'))


export default function Home() {

  const users = useSelector(state => state.user.users)
  const courses = useSelector(state => state.course.courses)
  const lessons = useSelector(state => state.lesson.lessons)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsersAction())
    dispatch(fetchCoursesAction())
    dispatch(fetchLessonsAction())
    
  }, [])

  console.log(users)

  return (
    <Layout>
      <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
        <nav className="learnht-breadcrumb">
          <div className="container">Home </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>
              The best place to build a better future.
            </h1>
            <p className="mt-4">
              In today's world, where politeness will soon be even rarer than virtue, we will come to the point where some will come to believe that bad education equals bad action.
            </p>

            <p className="mt-4">
              Create yout account today to start learning with us!
            </p>

            <Link href="/register"><span type="link" className="btn btn-warning btn-lg">Create your account now</span></Link>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="/images/programming.png" />
          </div>
        </div>
      </div>

      <div className="mt-5 p-5" style={{ backgroundColor: "#F6F6F6", minHeight: "20vh" }}>
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column" style={{ justifyContent: "center", alignItems: "center" }}>
              <div className="col-md-6 text-center" >
                <h2>Top Courses</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a...</p>
                <Link href="/courses"><span className="btn btn-lg btn-warning">Go to courses</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="text-center col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <h1 className="fa-6x" style={{ color: "#C5CCD6" }}>{users?.length}+</h1>
            <div className="mt-4">

              <strong style={{ fontSize: "1.2em", }}>Students/teachers</strong>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a...</p>
            </div>
          </div>

          <div className="text-center col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <h1 className="fa-6x" style={{ color: "#C5CCD6" }}>{courses?.length}+</h1>
            <div className="mt-4">

              <strong style={{ fontSize: "1.2em", }}>Actives Courses</strong>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a...</p>
            </div>
          </div>

          <div className="text-center col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <h1 className="fa-6x" style={{ color: "#C5CCD6" }}>{lessons?.length}+</h1>
            <div className="mt-4">

              <strong style={{ fontSize: "1.2em", }}>Lessons</strong>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a...</p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
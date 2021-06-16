import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesAction } from "../redux/actions/courseAction";
import CourseList from "../components/course/courseList";
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/layouts/layout'))

export default function Courses() {
  const allCourses = useSelector(state => state.course.courses)
  const [courses, setCourses] = useState(allCourses)
  const [search, setSearch] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    allCourses && setCourses(allCourses)
  }, [allCourses])

  useEffect(() => {
    dispatch(fetchCoursesAction())
  }, [])

  const filteredCourse = courses?.filter(course => {
    return course.name.toLowerCase().indexOf(search?.toLowerCase()) !== -1;
  });

  const courseList = search ? filteredCourse : courses;

  return (
    <Layout>
      <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
        <nav className="learnht-breadcrumb">
          <div className="container"> <Link href="/">Home</Link><i
            className="fa fa-chevron-right"></i>All courses
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div className="sidebar_position_right">
              <h2 className="archive-course-title">All courses</h2>
              <div className="stm_woo_helpbar clearfix">
                <div className="pull-left">
                  <form role="search" method="get" className="training-search" action="">
                    <label className="screen-reader-text" htmlFor="training-search-field-0">
                      Search for:
                    </label>
                    <input onChange={e => setSearch(e.target.value)} type="search" id="training-search-field-0" className="search-field" placeholder="Search the Courses" title="Search for:" />
                    {/* <input className="heading_font" type="submit" /> */}
                  </form>
                </div>
                <div className="pull-right xs-right-help">
                  <div className="clearfix">

                    <div className="pull-right select-xs-left">
                      <select className="form-control bg-white" >
                        <option value="courses/" > All courses</option>
                        <option value="product-category/soft/"> Software training</option>
                        <option value="product-category/graphic/"> Graphic &amp; Web Design</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>
              <div className="stm_archive_product_inner_grid_content">
                <ul className="stm-courses row list-unstyled">


                  {courseList?.map(course =>
                    <CourseList
                      key={course.id}
                      course={course}
                    />
                  )}
                  {
                    courses?.length === 0 &&
                    <div div div className="stm_woo_archive_view_type_list">
                      <li className="col-md-12 course-col-list first post-490 product type-product status-publish has-post-thumbnail product_cat-business-management product_cat-logical-thinking  instock sale featured shipping-taxable purchasable product-type-simple">
                        No courses found
                      </li>
                    </div>
                  }


                </ul>
                <div className="multiseparator list"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 hidden-sm hidden-xs">
            <div className="sidebar-area sidebar-area-right">
              <aside id="archives-3" className="widget widget_archive">
                <div className="widget_title">
                  <h3>Must popular course</h3>
                </div>

              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

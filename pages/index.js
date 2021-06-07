import { useState, useEffect } from "react";
import Layout from "../components/layouts/layout";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const allCourses = useSelector(state => state.course.courses)
  const [courses, setCourses] = useState(allCourses)

  useEffect(() => {
    allCourses && setCourse(allCourses)
  }, [allCourses])


  return (
    <Layout>
      <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
        <nav className="learnht-breadcrumb">
          <div className="container"> <a href="">Home</a><i
            className="fa fa-chevron-right"></i>All courses</div>
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
                    <label className="screen-reader-text" for="training-search-field-0">
                      Search for:
                      </label>
                    <input type="search" id="training-search-field-0" className="search-field" placeholder="Search the Courses" value="" name="s" title="Search for:" />
                    <input className="heading_font" type="submit" value="Search" /> <input type="hidden" name="post_type" value="product" />
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

                  {courses ?
                    courses.map(course =>
                      <div className="stm_woo_archive_view_type_list">
                        <li className="col-md-12 course-col-list first post-490 product type-product status-publish has-post-thumbnail product_cat-business-management product_cat-logical-thinking  instock sale featured shipping-taxable purchasable product-type-simple">
                          <div className="stm_archive_product_inner_unit heading_font">
                            <div className="stm_archive_product_inner_unit_centered clearfix">
                              <div className="stm_featured_product_image_list">
                                
                                <Link href="/courses/slug" title={`View course - ${course.title}`}>
                                  <img width="300" height="225" src="/images/img.jpg" className="img-responsive wp-post-image" alt="" />
                                </Link>
                              </div>
                              <div className="stm_products_archive_body_list">
                                <h2 className="title"> {course.title} </h2>
                                <div className="clearfix stm_product_meta_unit">
                                  <div className="clearfix"></div>
                                  <div className="pull-right sm-xs-pull-left">
                                    <div className="stm_featured_product_stock d-flex aligh-items-center justify-content-center">
                                      <i className="fa-icon-stm_icon_users"></i>
                                      <span className="">163 Students</span></div>
                                  </div>
                                </div>
                                <div className="stm_archive_product_exceprt normal_font">
                                  <p>{course.desctiption}</p>
                                </div>
                                <div className="see_more h5"> <Link href={`/courses/${course.slug}`}>Seemore</Link></div>
                              </div>
                            </div>
                            <div className="multiseparator"></div>
                          </div>
                        </li>
                      </div>
                    )
                    :
                    <div className="stm_woo_archive_view_type_list">
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
    </Layout>
  )
}

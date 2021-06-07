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
                      <select id="product_categories_filter" className="select2-hidden-accessibl select2 select2-container select2-container--default" >
                        <option value="courses/"> All courses</option>
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
                    <div className="stm_woo_archive_view_type_list">
                      <li className="col-md-12 course-col-list first post-490 product type-product status-publish has-post-thumbnail product_cat-business-management product_cat-logical-thinking  instock sale featured shipping-taxable purchasable product-type-simple">
                        <div className="stm_archive_product_inner_unit heading_font">
                          <div className="stm_archive_product_inner_unit_centered clearfix">
                            <div className="stm_featured_product_image_list">
                              <a className="trainingp-link training__link">
                                <div className="stm_featured_product_price">
                                  <div className="price"> <span
                                    className="learnht-Price-amount amount"><bdi><span
                                      className="learnht-Price-currencySymbol">$</span>39.99</bdi></span>
                                  </div>
                                </div>
                              </a>
                              <Link href="/courses/slug" title="View course - Basic Time Management Course">
                                <img width="300" height="225" src="/images/img.jpg" className="img-responsive wp-post-image" alt="" />
                              </Link>
                            </div>
                            <div className="stm_products_archive_body_list">
                              <h2 className="title"> Basic Time Management Course <span
                                className="product_status h5 special"> Special </span></h2>
                              <div className="clearfix stm_product_meta_unit">
                                <div className="clearfix"></div>
                                <div className="pull-right sm-xs-pull-left">
                                  <div className="stm_featured_product_stock d-flex aligh-items-center justify-content-center">
                                    <i className="fa-icon-stm_icon_users"></i>
                                    <span className="">163 Students</span></div>
                                </div>
                              </div>
                              <div className="stm_archive_product_exceprt normal_font">
                                <p>Personal time management skills are essential for
                                professional &amp; personal success in any area of life.
                                Those able to successfully implement time management
                                strategies are able to control their workload rather
                                than spend each day in a frenzy of activity reacting to
                                                        crisis after crisis.</p>
                              </div>
                              <div className="see_more h5"> <Link href="/courses/slug">Seemore</Link></div>
                            </div>
                          </div>
                          <div className="multiseparator"></div>
                        </div>
                      </li>
                    </div>
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
                  <h3>Archive</h3>
                </div> <label className="screen-reader-text" for="archives-dropdown-3">Archive</label>
                <select id="archives-dropdown-3" name="archive-dropdown" tabindex="-1"
                  className="select2-hidden-accessible" aria-hidden="true">
                  <option value="">Select Month</option>
                  <option value="2015/06/"> June 2015
                                &nbsp;(3)</option>
                  <option value="2015/05/"> May 2015
                                &nbsp;(2)</option>
                  <option value="2015/04/"> April 2015
                                &nbsp;(1)</option>
                  <option value="2015/03/"> March 2015
                                &nbsp;(1)</option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr"
                  style={{ width: "100%" }}><span className="selection"><span
                    className="select2-selection select2-selection--single" role="combobox"
                    aria-haspopup="true" aria-expanded="false" tabindex="0"
                    aria-labelledby="select2-archives-dropdown-3-container"><span
                      className="select2-selection__rendered"
                      id="select2-archives-dropdown-3-container" title="Select Month">Select
                                        Month</span><span className="select2-selection__arrow"
                      role="presentation"><b
                        role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper" aria-hidden="true"></span></span>

              </aside>
              <aside id="working_hours-2" className="widget widget_working_hours">
                <div className="widget_title">
                  <h3>Working hours</h3>
                </div>
                <table className="table_working_hours">
                  <tbody>
                    <tr className="opened">
                      <td className="day_label h6 normal_font">Monday</td>
                      <td className="day_value h6 normal_font">9:30 am - 6.00 pm</td>
                    </tr>
                    <tr className="opened">
                      <td className="day_label h6 normal_font">Tuesday</td>
                      <td className="day_value h6 normal_font">9:30 am - 6.00 pm</td>
                    </tr>
                    <tr className="opened">
                      <td className="day_label h6 normal_font">Wednesday</td>
                      <td className="day_value h6 normal_font">9:30 am - 6.00 pm</td>
                    </tr>
                    <tr className="opened">
                      <td className="day_label h6 normal_font">Thursday</td>
                      <td className="day_value h6 normal_font">9:30 am - 6.00 pm</td>
                    </tr>
                    <tr className="opened">
                      <td className="day_label h6 normal_font">Friday</td>
                      <td className="day_value h6 normal_font">9:30 am - 3.00 pm</td>
                    </tr>
                    <tr className="closed">
                      <td className="day_label h6 normal_font">Saturday</td>
                      <td className="day_value closed h6 normal_font"><span>Closed</span></td>
                    </tr>
                    <tr className="closed">
                      <td className="day_label h6 normal_font">Sunday</td>
                      <td className="day_value closed h6 normal_font"><span>Closed</span></td>
                    </tr>
                  </tbody>
                </table>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { showCourseAction, courseRequestAction } from "../../redux/actions/courseAction";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/payments/checkoutForm";
import { useToasts } from 'react-toast-notifications';

import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../components/layouts/layout'))

const stripPromise = loadStripe("pk_test_51HnTzqAEoJWPUiKcW6O3xeaLujtzRtqg2sZO0VcAX11sQVYrIFlZSxFMHWKKJhYBoNaZesz7vPRTYlD4GszN0REB00HZ5uloE6");
const SingleCourse = ({ }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch()
  const router = useRouter()

  const { course, access: haveAccess } = useSelector(state => state.course)

  const currentUser = useSelector(state => state.user.currentUser)

  const [showCourse, setShowCourse] = useState(course)
  const [collaps, setCollaps] = useState();
  const [tab, setTab] = useState('description');
  const [status, setStatus] = useState("ready")

  const [access, setAccess] = useState(haveAccess)

  useEffect(() => {
    dispatch(showCourseAction(router.query?.slug))
  }, [])

  useEffect(() => {
    router.query?.slug && dispatch(showCourseAction(router.query?.slug))
  }, [router.query?.slug])

  useEffect(() => {
    course && setShowCourse(course)
  }, [course])

  useEffect(() => {
    status && setStatus(status)
  }, [status])

  useEffect(() => {
    haveAccess && setAccess(haveAccess)
  }, [haveAccess])

  const requestCourse = () => {
    const payload = {
      course_user: {
        user_id: currentUser.id,
        course_id: showCourse?.id,
        confirm: true
      }
    }
    dispatch(courseRequestAction(payload))
  }

  const defCollaps = id => {
    collaps === id ? setCollaps('') : setCollaps(id)
  }

  const warning = () => {
    addToast("Please buy the course first", { appearance: 'warning', autoDismiss: true, });
  }



  return (
    <Layout>
      <div className="product-template-default single single-product postid-92 theme-masterstudy learnht learnht-page learnht-js default stm_preloader_ wpb-js-composer js-comp-ver-6.5.0 vc_responsive has_envato_iframe" id="main" style={{ marginBottom: "386px", }}>
        <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
          <nav className="learnht-breadcrumb">
            <div className="container">
              <Link href="/">Home</Link>
              <i className="fa fa-chevron-right"></i>
              <Link href="/courses">All courses</Link>
              <i className="fa fa-chevron-right"></i>
              <Link href={`/categories/${showCourse?.category?.slug}`}><span className="cursor-pointer">{showCourse?.category?.name}</span></Link>
              <i className="fa fa-chevron-right"></i>
              {showCourse?.name}
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="sidebar_position_right">
                <div className="learnht-notices-wrapper"></div>
                <div id="product-92" className="post-92 product type-product status-publish has-post-thumbnail product_cat-graphic product_cat-logical-thinking product_cat-management first instock sale featured shipping-taxable purchasable product-type-simple">
                  <div className="single_product_title">
                    <h2 className={showCourse?.name}>{showCourse?.name}</h2>
                  </div>
                  <div className="single_product_after_title">
                    <div className="clearfix">
                      <div className="pull-left meta_pull">
                        <div className="pull-left xs-product-cats-left">
                          <div className="meta-unit categories clearfix">
                            <div className="pull-left">
                              <i className="fa-icon-stm_icon_category"></i>
                            </div>
                            <div className="meta_values">
                              <div className="label h6">Category</div>
                              <div className="value h6">
                                <a href="/">
                                  {showCourse?.category?.name}<span>/</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pull-right xs-comments-left">
                        <div className="star-rating" role="img" aria-label="Rated 4.30 out of 5">
                          <span style={{ width: "86%" }}>Rated <strong className="rating">4.30</strong> out of 5</span>
                        </div>
                        <span className="price">
                          {/* <del >
                            <span className="learnht-Price-amount amount">
                              <bdi>
                                <span className="learnht-Price-currencySymbol">$</span>
                                {showCourse?.requirement?.price ? showCourse?.requirement?.price : "free"}</bdi>
                            </span>
                          </del> */}
                          <ins>
                            <span className="learnht-Price-amount amount">
                              <bdi>
                                <span className="learnht-Price-currencySymbol"></span>{showCourse?.requirement?.price ? '$' + showCourse?.requirement?.price : "free"}</bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="meta-unit text-right xs-text-left">
                          <div className="value h6">10 Reviews</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="stm_woo_gallery-wrapper">
                    <div className="training-gallery training-gallery--with-images training-gallery--columns-4 images" data-columns="4" style={{ opacity: 1, transition: "opacity 0.25s ease-in-out 0s" }}>
                      <a href="" className="training-gallery__trigger">🔍</a>
                      <div className="flex-viewport" style={{ overflow: "hidden", position: "relative", height: "558.109px" }}>
                        <figure className="training-gallery__wrapper" style={{ width: "1000%", transitionDuration: "0s", transform: "translate3d(0px, 0px, 0px)" }}>
                          <div data-thumb-alt="" className="training-gallery__image flex-active-slide" style={{ width: "838px", float: "left", display: "block", position: "relative", overflow: "hidden" }}>
                            {/* <Link href={showCourse?.picture }> */}
                            {showCourse?.picture && <img src={showCourse?.picture} className="img-thumbnail img-responsive" alt="" width="100%" height="100%" />}
                            {/* </Link> */}
                            {/* <img role="presentation" alt="" src={showCourse?.picture } className="zoomImg" style={{ position: "absolute", top: "-1.65788px", left: "-74.1599px", opacity: 0, width: "999px", height: "665px", border: "none", maxWidth: "none", maxHeight: "none" }} /> */}
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div className="stm_product_meta_single_page visible-sm visible-xs">

                    <div className="heading_font product_main_data">
                      <div className="single_product_title">
                        <h2 className="product_title entry-title">Course details</h2>
                      </div>

                      <span className="price">
                        <del >
                          <span className="learnht-Price-amount amount">
                            <bdi>
                              <span className="learnht-Price-currencySymbol">$</span>{showCourse?.requirement?.price ? showCourse?.requirement?.price : "free"}</bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="learnht-Price-amount amount">
                            <bdi>
                              <span className="learnht-Price-currencySymbol"></span>{showCourse?.requirement?.price ? '$' + showCourse?.requirement?.price : "free"}</bdi>
                          </span>
                        </ins>
                      </span>


                    </div>


                    <div className="stm_product_sidebar_meta_units">
                      <div className="stm_product_sidebar_meta_unit">
                        <table>
                          <tbody>
                            <tr>
                              <td className="icon">
                                <i className="fa-icon-stm_icon_users"></i>
                              </td>
                              <td className="value h5">{showCourse?.users_count} Students</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="stm_product_sidebar_meta_unit">
                        <table>
                          <tbody>
                            <tr>
                              <td className="icon">
                                <i className="fa-icon-stm_icon_clock"></i>
                              </td>
                              <td className="value h5">Duration: {showCourse?.requirement?.duration} hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="stm_product_sidebar_meta_unit">
                        <table>
                          <tbody>
                            <tr>
                              <td className="icon">
                                <i className="fa-icon-stm_icon_bullhorn"></i>
                              </td>
                              <td className="value h5">Lectures: {showCourse?.lessons_count}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="stm_product_sidebar_meta_unit">
                        <table>
                          <tbody>
                            <tr>
                              <td className="icon">
                                <i className="fa-icon-stm_icon_film-play"></i>
                              </td>
                              <td className="value h5">Video: 9 hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="stm_product_sidebar_meta_unit">
                        <table>
                          <tbody>
                            <tr>
                              <td className="icon">
                                <i className="fa-icon-stm_icon_license"></i>
                              </td>
                              <td className="value h5">Certificate of Completion</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex pt-3">
                    <div className={`p-2 border  mr-2 cursor-pointer ${tab === 'description' ? 'bg-warning text-white' : ''}`} onClick={() => setTab('description')}>Description</div>
                    <div className={`p-2 border  mr-2 cursor-pointer ${tab === 'requirement' ? 'bg-warning text-white' : ''} `} onClick={() => setTab('requirement')}>Requirements</div>
                    {!access && <div className={`p-2 border  mr-2 cursor-pointer ${tab === 'buy' ? 'bg-warning text-white' : ''} `} onClick={() => setTab('buy')}>Buy this course</div>}
                  </div>

                  <div className={`vc_row wpb_row vc_row-fluid ${tab !== 'description' ? 'd-none' : ''}`}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="">
                          <div className="">
                            <div className="wpb_wrapper">
                              <h3 style={{ marginBottom: "21px" }}>COURSE DESCRIPTION</h3>
                              {showCourse?.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`vc_row wpb_row vc_row-fluid ${tab !== 'requirement' ? 'd-none' : ''} `}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_wrapper">
                            <h3 style={{ marginBottom: "21px" }}>COURSE REQUIREMENT</h3>
                            <div dangerouslySetInnerHTML={{ __html: showCourse?.requirement?.content }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`vc_row wpb_row vc_row-fluid ${tab !== 'buy' ? 'd-none' : ''}`}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="">
                          <div className="">
                            <div className="wpb_wrapper">
                              <h3 style={{ marginBottom: "21px" }}>BUY THIS COURSE</h3>
                              {
                                (currentUser) ?
                                  !access ?
                                    showCourse?.requirement?.price ?
                                      status !== 'success' ?
                                        <Elements stripe={stripPromise}>
                                          <CheckoutForm setAccess={setAccess} course={course} currentUser={currentUser} success={() => setStatus("success")} />
                                        </Elements>
                                        :
                                        "Your payment has been made successfully."
                                      :
                                      <>
                                        <div>This course is free. Click to activate it!</div>
                                        <button onClick={requestCourse} className="btn btn-warning mt-2 d-block">Activate</button>
                                      </>
                                    :
                                    "This course is activated successfully!"
                                  :
                                  <>
                                    Please, login or signup first <br />
                                    <button className="btn btn-warning mt-2">
                                      <Link href="/login"><span className="text-white">Login</span></Link>
                                    </button>
                                  </>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1435385624281">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_custom_heading text_align_left">
                            <h3 style={{ textAlign: "left", fontFamily: "Montserrat", fontWeight: 700, fontStyle: "normal" }} className="masterstudy-custom-title">CURRICULUM</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="course_lessons_section">
                            {
                              showCourse?.chapters?.map((chapter, idx) =>
                                <div key={chapter.slug} className="panel-group" id="accordion_4023" role="tablist" aria-multiselectable="true">
                                  <div className={`panel panel-default ${collaps === chapter.slug ? 'panel-collapsed' : ''}`}>
                                    <div className="panel-heading" role="tab" id="heading_tab7188" >
                                      <div className="course_meta_data" style={{ borderWidth: "0px" }}>
                                        <div className="panel-title" >
                                          <a className={`${collaps !== chapter.slug ? 'collapsed' : ''} tapable`} role="button" data-toggle="collapse" onClick={() => defCollaps(chapter.slug)} aria-expanded={collaps === chapter.slug} aria-controls="collapseOne" >

                                            <div className="pl-4 pr-4 d-flex justify-content-between">
                                              <div className="d-flex">
                                                {/* <div className="mr-3">1</div> */}
                                                {/* <div className="mr-3 icon"><i className="fa fa fa-play-circle"></i></div> */}

                                                <div className="course-title-holder">
                                                  <strong className="mr-3">Chapter {idx + 1}: {chapter.title}</strong>
                                                  <i className="fa fa-sort-down mr-3"></i>
                                                  {/* <div className="stm_badge stm_small_badge">
                                                    <div className="badge_unit heading_font video">Video</div>
                                                  </div> */}
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    {
                                      chapter.lessons.map((lesson, index) =>
                                        <div key={index} id={chapter.slug} className={`panel-collapse collapse ${collaps === chapter.slug ? 'in' : ''}`} style={{ height: collaps !== chapter.slug && "0px" }} aria-expanded={collaps === chapter.slug} role="tabpanel" aria-labelledby="heading_tab7188">
                                          <div className="pl-5 pr-5 pb-2">
                                            <div className="cursor-pointer" onClick={() => !access && warning()} >
                                              <span className="">{idx + 1}.{index + 1} - </span>
                                              {access ?
                                                <Link href={`/courses/lessons/${lesson.slug}`}>{lesson.title}</Link>
                                                :
                                                <span className="cursor-pointer">{lesson.title}</span>
                                              }
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    }
                                  </div>
                                </div>
                              )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 hidden-sm hidden-xs">
              <div className="stm_product_meta_single_page right">
                <div className="single_product_title">
                  {/* <h2 className="product_title entry-title">Course details</h2> */}
                  <span className="price">
                    {/* <del >
                      <span className="learnht-Price-amount amount">
                        <bdi>
                          <span className="learnht-Price-currencySymbol">$</span>{showCourse?.requirement?.price ? showCourse?.requirement?.price : "free"}</bdi>
                      </span>
                    </del> */}
                    <ins>
                      <span className="learnht-Price-amount amount">
                        <bdi>
                          <span className="learnht-Price-currencySymbol"></span>{showCourse?.requirement?.price ? '$' + showCourse?.requirement?.price : "free"}</bdi>
                      </span>
                    </ins>
                  </span>

                </div>
                <div className="stm_product_sidebar_meta_units">
                  <div className="stm_product_sidebar_meta_unit">
                    <table>
                      <tbody>
                        <tr>
                          <td className="icon">
                            <i className="fa-icon-stm_icon_users"></i>
                          </td>
                          <td className="value h5">{showCourse?.users_count} Students</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="stm_product_sidebar_meta_unit">
                    <table>
                      <tbody>
                        <tr>
                          <td className="icon">
                            <i className="fa-icon-stm_icon_clock"></i>
                          </td>
                          <td className="value h5">Duration: {showCourse?.requirement?.duration} hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="stm_product_sidebar_meta_unit">
                    <table>
                      <tbody>
                        <tr>
                          <td className="icon">
                            <i className="fa-icon-stm_icon_bullhorn"></i>
                          </td>
                          <td className="value h5">Lectures: {showCourse?.lessons_count}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="stm_product_sidebar_meta_unit">
                    <table>
                      <tbody>
                        <tr>
                          <td className="icon">
                            <i className="fa-icon-stm_icon_license"></i>
                          </td>
                          <td className="value h5">Certificate of Completion</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default SingleCourse
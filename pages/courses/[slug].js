import { useState } from "react"
import Link from "next/link"
import Layout from "../../components/layouts/layout"

const SingleCourse = () => {

  const [collaps, setCollaps] = useState();

  const defCollaps = id => {
    collaps === id ? setCollaps('') : setCollaps(id)
  }

  return (
    <Layout>
      <div className="product-template-default single single-product postid-92 theme-masterstudy woocommerce woocommerce-page woocommerce-js default stm_preloader_ wpb-js-composer js-comp-ver-6.5.0 vc_responsive has_envato_iframe" id="main" style={{ marginBottom: "386px", }}>
        <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
          <nav className="woocommerce-breadcrumb">
            <div className="container">
              <Link href="/">Home</Link>
              <i className="fa fa-chevron-right"></i>
              <Link href="/courses">All courses</Link>
              <i className="fa fa-chevron-right"></i>
              {/* <Link href="/product-category/management/">Social Media Management</Link> */}
              <i className="fa fa-chevron-right"></i>How to Design a Logo – a Beginners Course</div>
          </nav>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="sidebar_position_right">
                <div className="woocommerce-notices-wrapper"></div>
                <div id="product-92" className="post-92 product type-product status-publish has-post-thumbnail product_cat-graphic product_cat-logical-thinking product_cat-management first instock sale featured shipping-taxable purchasable product-type-simple">
                  <div className="single_product_title">
                    <h2 className="product_title entry-title">How to Design a Logo – a Beginners Course</h2>
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
                              <div className="label h6">Category:</div>
                              <div className="value h6">
                                <a href="/">
                                  Graphic &amp; Web Design <span>/</span>
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
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">$</span>89.00</bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">$</span>50.00</bdi>
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
                            <a href="/images/img.jpg">
                              <img width="1000" height="666" src="/images/img.jpg" className="wp-post-image" alt="" />
                            </a>
                            <img role="presentation" alt="" src="/images/img.jpg" className="zoomImg" style={{ position: "absolute", top: "-1.65788px", left: "-74.1599px", opacity: 0, width: "999px", height: "665px", border: "none", maxWidth: "none", maxHeight: "none" }} />

                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div className="stm_product_meta_single_page visible-sm visible-xs">
                    <div className="heading_font product_main_data">
                      <div>
                        <p className="price heading_font">
                          <label className="h6 stm_price_label">Price</label>
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">$</span>89.00</span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">$</span>50.00</span>
                          </ins>
                        </p>
                      </div>
                      <p className="stock in-stock">166 in stock</p>
                      <form className="cart" action="https://stylemixthemes.com/masterstudy/ms/courses/how-to-design-a-logo/" method="post" enctype="multipart/form-data">
                        <div className="quantity">
                          <input type="number" id="quantity_60bc6a0672181" className="input-text qty text" step="1" min="1" max="166" name="quantity" value="1" title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" /></div>
                        <button type="submit" name="add-to-cart" value="92" className="single_add_to_cart_button button alt">Add to cart</button>
                      </form>
                    </div>
                    <div className="stm_product_sidebar_meta_units">
                      <div className="stm_product_sidebar_meta_unit">
                        <table>
                          <tbody>
                            <tr>
                              <td className="icon">
                                <i className="fa-icon-stm_icon_users"></i>
                              </td>
                              <td className="value h5">166 Students</td>
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
                              <td className="value h5">Duration: 72 hours</td>
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
                              <td className="value h5">Lectures: 102</td>
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

                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1436877382226">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <h3 style={{ marginBottom: "21px" }}>COURSE DESCRIPTION</h3>
                              <p style={{ marginBottom: "16px" }}>Maecenas cursus mauris libero, a imperdiet enim pellentesque id. Aliquam erat volutpat. Suspendisse sit amet sapien at risus efficitur sagittis. Pellentesque non ullamcorper justo. Vivamus commodo, sem et vestibulum eleifend, erat odio tristique enim, nec tempus tortor ligula in neque. Vestibulum eu commodo ante. Nunc volutpat nec diam a congue.</p>
                              <p style={{ marginBottom: "16px" }}>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1435574544208">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_custom_heading text_align_left">
                            <h4 style={{ textAlign: "left", fontFamily: "Montserrat", fontWeight: 400, fontStyle: "normal" }} className="masterstudy-custom-title">Requirements</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1435305038672">
                    <div className="wpb_column vc_column_container vc_col-sm-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <ul>
                                <li>Donec porta ultricies urna, faucibus magna dapibus.</li>
                                <li>Etiam varius tortor ut ligula facilisis varius in a leo.</li>
                                <li>Folutpat tempor tur duis mattis dapibus, felis amet.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <ul>
                                <li>Donec porta ultricies urna, faucibus magna dapibus.</li>
                                <li>Etiam varius tortor ut ligula facilisis varius in a leo.</li>
                                <li>Folutpat tempor tur duis mattis dapibus, felis amet.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1435574551925">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="vc_custom_heading text_align_left">
                            <h4 style={{ textAlign: "left", fontFamily: "Montserrat", fontWeight: 400, fontStyle: "normal" }} className="masterstudy-custom-title">What is the target audience?</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <ul>
                                <li>This course is intended for anyone interested in learning to master his or her own body.</li>
                                <li>This course is aimed at beginners, so no previous experience with hand balancing skillts is necessary</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1435574600454">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1435574626206">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="multiseparator"></div>
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
                          <h4 className="course_title">Section 1: Introduction to Handstands</h4>
                          <div className="course_lessons_section">
                            <div className="panel-group" id="accordion_4023" role="tablist" aria-multiselectable="true">
                              <div className={`panel panel-default ${collaps === 'tab7188' ? 'panel-collapsed' : ''}`}>
                                <div className="panel-heading" role="tab" id="heading_tab7188" >
                                  <div className="course_meta_data" style={{ borderWidth: "0px" }}>
                                    <div className="panel-title" >
                                      <a className={`${collaps !== 'tab7188' ? 'collapsed' : ''} tapable`} role="button" data-toggle="collapse" onClick={() => defCollaps('tab7188')} aria-expanded={collaps === 'tab7188'} aria-controls="collapseOne" >

                                        <div className="pl-4 pr-4 d-flex justify-content-between">
                                          <div className="d-flex">
                                            <div className="mr-3">1</div>
                                            <div className="mr-3 icon"><i className="fa fa fa-play-circle"></i></div>

                                            <div className="course-title-holder">
                                              <strong className="mr-3">Welcome to the Course!</strong>
                                              <i className="fa fa-sort-down mr-3"></i>
                                              <div className="stm_badge stm_small_badge">
                                                <div className="badge_unit heading_font video">Video</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div id="tab7188" className={`panel-collapse collapse ${collaps === 'tab7188' ? 'in' : ''}`} style={{ height: collaps !== 'tab7188' && "0px" }} aria-expanded={collaps === 'tab7188'} role="tabpanel" aria-labelledby="heading_tab7188">
                                  <div className="pl-5 pr-5 pb-4">
                                    <div className="">
                                      <span className="">1.1 - </span>
                                      <Link href="/courses/lessons/lesson">Sorry, you can view this section only after purchasing the course</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                  <h2 className="product_title entry-title">Course details</h2>
                </div>
                <div className="stm_product_sidebar_meta_units">
                  <div className="stm_product_sidebar_meta_unit">
                    <table>
                      <tbody>
                        <tr>
                          <td className="icon">
                            <i className="fa-icon-stm_icon_users"></i>
                          </td>
                          <td className="value h5">166 Students</td>
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
                          <td className="value h5">Duration: 72 hours</td>
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
                          <td className="value h5">Lectures: 102</td>
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
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default SingleCourse
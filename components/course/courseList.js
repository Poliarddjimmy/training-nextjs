import Link from "next/link"
import Image from "next/image"

export default function CourseList({course}){
  return <div className="stm_woo_archive_view_type_list">
  <li className="col-md-12 course-col-list first post-490 product type-product status-publish has-post-thumbnail product_cat-business-management product_cat-logical-thinking  instock sale featured shipping-taxable purchasable product-type-simple">
    <div className="stm_archive_product_inner_unit heading_font">
      <div className="stm_archive_product_inner_unit_centered clearfix">
        <div className="stm_featured_product_image_list">

          <Link href={`/courses/${course?.slug}`} title={`View course - ${course?.name}`}>
            <img width="300" height="225" src={course?.picture} className="img-responsive wp-post-image cursor-pointer" />
          </Link>
        </div>
        <div className="stm_products_archive_body_list">
          <Link href={`/courses/${course?.slug}`} title={`View course - ${course?.name}`}>
            <h2 className="title cursor-pointer">
              {course?.name}
            </h2>
          </Link>
          <div className="clearfix stm_product_meta_unit">
            <div className="clearfix"></div>
            <div className="pull-right sm-xs-pull-left">
              <div className="stm_featured_product_stock d-flex aligh-items-center justify-content-center">
                <i className="fa-icon-stm_icon_users"></i>
                <span className="">{course?.users_count} Students</span></div>
            </div>
          </div>
          <div className="stm_archive_product_exceprt normal_font">
            <p>{course?.description}</p>
          </div>
          <div className="see_more h5 cursor-pointer"> <Link href={`/courses/${course?.slug}`}>Seemore</Link></div>
        </div>
      </div>
      <div className="multiseparator"></div>
    </div>
  </li>
</div>
}
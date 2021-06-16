import { useState, useEffect } from "react";
import Link from "next/link"
import Layout from "../components/layouts/layout";

export default function Home() {

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


            <Link href="/register"><button type="link" className="btn btn-warning btn-lg">Create your account now</button></Link>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="/images/programming.png" />
          </div>
        </div>
      </div>

    </Layout>
  )
}

import { useEffect, useState } from "react"
import Link from 'next/link'
import { useForm, Controller } from "react-hook-form";
import { loginAction } from "../redux/actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { useToasts } from 'react-toast-notifications';
import { useRouter } from "next/router";

import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/layouts/layout'))

const Login = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const error = useSelector((state) => state.user.error)
  const [loginError, setLoginError] = useState()

  const { control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const { addToast } = useToasts();
  const router = useRouter()

  const onSubmit = data => {
    let payload = {
      user: data
    }

    try {
      dispatch(loginAction(payload))
    } catch (error) {
      addToast(error.message, { appearance: 'error', autoDismiss: true, });
    }
  }

  useEffect(() => {
    setLoginError("")
  }, [])

  useEffect(() => {
    (error && !currentUser) && setLoginError("Invalid email or password")
  }, [error, currentUser])

  useEffect(() => {
    if (currentUser) {
      addToast('You are logged in', { appearance: 'success', autoDismiss: true, });
      router.back();
    }
  }, [currentUser])

  return (
    <Layout>
      <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
        <nav className="learnht-breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <i className="fa fa-chevron-right"></i>Login
            </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <h1>Login form</h1>
              <p>Inter your email and password to login</p>
              {loginError && <small className="text-danger mb-3 mt-n3">{loginError}</small>}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) =>
                      <input
                        {...field}
                        type="email"
                        className={`form-control ${(errors.email) && `is-invalid`}`}
                        placeholder="Email"
                      />
                    }
                  />
                  {errors.email && <small className="invalid-feedback">The email field is required</small>}
                </div>

                <div className="form-group">
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) =>
                      <input
                        {...field}
                        type="password"
                        className={`form-control ${(errors.password) && `is-invalid`}`}
                        placeholder="password"
                      />
                    }
                  />
                  {errors.password && <small className="invalid-feedback">The password field is required and must bigger or equal to 6</small>}
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-lg btn-dark">Login</button>
                </div>

                <div className="mb-3">
                  Don't have an account? <Link href="/register"><span className="text-warning cursor-pointer">Register</span></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Login
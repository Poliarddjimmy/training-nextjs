import { useEffect } from "react"
import Layout from "../components/layouts/layout"
import Link from 'next/link'
import { useForm, Controller } from "react-hook-form";
import { registerAction } from "../redux/actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { useToasts } from 'react-toast-notifications';
import { useRouter } from "next/router";

const Register = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  const { control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const { addToast } = useToasts();
  const router = useRouter()

  const onSubmit = data => {
    try {
      dispatch(registerAction(data))
    } catch (error) {
      addToast(error.message, { appearance: 'error', autoDismiss: true, });
    }
  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    if (currentUser) {
      addToast('You are logged in', { appearance: 'success', autoDismiss: true, });
      router.push("/")
    }
  }, [currentUser])

  return (
    <Layout>
      <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
        <nav className="learnht-breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <i className="fa fa-chevron-right"></i>register
            </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <h1>Register form</h1>
              <p>Fill this form to register</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) =>
                      <input
                        {...field}
                        type="text"
                        className={`form-control ${(errors.name) && `is-invalid`}`}
                        placeholder="Your full name"
                      />
                    }
                  />
                  {errors.name && <small className="invalid-feedback">The name field is required</small>}

                </div>

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
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) =>
                      <input
                        {...field}
                        type="text"
                        className={`form-control ${(errors.username) && `is-invalid`}`}
                        placeholder="username"
                      />
                    }
                  />
                  {errors.username && <small className="invalid-feedback">The username field is required</small>}

                </div>

                <div className="form-group">
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true, minLength: 6 }}
                    render={({ field }) =>
                      <input
                        {...field}
                        type="password"
                        className={`form-control ${(errors.password) && `is-invalid`}`}
                        placeholder="Password"
                      />
                    }
                  />
                  {errors.password && <small className="invalid-feedback">The password field is required and must bigger or equal to 6</small>}

                </div>

                <div className="form-group">
                  <Controller
                    name="password_confirmation"
                    control={control}
                    defaultValue=""
                    rules={{ required: true, validate: (value) => value === watch('password') || "Passwords don't match." }}
                    render={({ field }) =>
                      <input
                        {...field}
                        type="password"
                        className={`form-control ${(errors.password_confirmation) && `is-invalid`}`}
                        placeholder="Conform your password"
                      />
                    }
                  />
                  {errors.password_confirmation && <small className="invalid-feedback">{errors.password_confirmation.message}</small>}

                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-lg btn-dark">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Register
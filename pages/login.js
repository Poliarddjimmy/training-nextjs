import Layout from "../components/layouts/layout"
import Link from 'next/link'
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Layout>
      <div className="stm_lms_breadcrumbs stm_lms_breadcrumbs__header_default">
        <nav className="woocommerce-breadcrumb">
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
                  {errors.password && <small className="invalid-feedback">The email field is required</small>}

                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-warning">Submit</button>
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
import LessonLayout from "../../../components/layouts/LessonLayout"

const Lesson = () => {
  return (
    <LessonLayout>
      <div className="p-4 d-flex justify-content-between align-items-center">
        <div>
          <i class="bg-dark p-3 text-white rounded-circle fa fa-list-ul fa-1x" aria-hidden="true"></i>
        </div>
        <div>
          <i class="bg-dark p-3 text-white rounded-circle fa fa-question fa-1x" aria-hidden="true"></i>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12">
              <h2 style={{ fontFamily: "Montserrat", color: "#273044" }}>Introduction to MasterStudy Theme</h2>
              <h1 style={{ fontFamily: "Montserrat" }}>General Settings</h1>
              <div className="mt-5" style={{ fontFamily: "Open Sans", fontSize: "18px" }}>
                <p>
                  Masterstudy LMS theme and plugin open unlimited opportunities for their users. Extended functionality,
                  simplicity, and accuracy provide customers an enjoyable experience. Both products were developed in a way
                  they could ensure a convenient use equally for admins, instructors, and students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
export default Lesson
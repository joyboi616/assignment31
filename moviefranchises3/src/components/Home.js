import React from 'react'

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button className='btn btn-primary'>Add data</button>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>meet</td>
              <td>meet@gmail.com</td>
              <td>@Webdeveloper</td>
              <td>9191919191919</td>
              <td>

              </td>
            </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home
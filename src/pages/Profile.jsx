
export const Profile = ()=>{
    return(
        <>
    <section class="container">

      <div class="profile-grid my-1">
   <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="https://www.011global.com/Account/Slices/user-anonymous.png"
            alt=""
          />

          <h1 class="large">Gerald Solano</h1>
          <p class="lead">Admin</p>
  
        </div>
 
         
        <div class="profile-github selector">
          <h2 class="text-primary my-1">
            <i class="fab fa-github"></i> Historial
          </h2>
          <div class="repo bg-white my-1 p-1">
            <div>
              <h4><a href="#">Repo One</a></h4>
              <p>
               .
              </p>
            </div>

            <div>
              <ul>
                <li class="badge badge-success">Date:</li>
                <li class="badge badge-danger">Cost:</li>
                <li class="badge badge-dark">Duration</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}
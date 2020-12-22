
export const Profile = ()=>{
    return(
        <>
    <section class="container">

      <div class="profile-grid my-1">
   <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />

          <h1 class="large">John Doe</h1>
          <p class="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <div class="icons my-1">
            <a href="#">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
 
         
        <div class="profile-github selector">
          <h2 class="text-primary my-1">
            <i class="fab fa-github"></i> Historial
          </h2>
          <div class="repo bg-white my-1 p-1">
            <div>
              <h4><a href="#">Repo One</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, tenetur.
              </p>
            </div>

            <div>
              <ul>
                <li class="badge badge-primary">Stars: 44</li>
                <li class="badge badge-dark">Watchers: 20</li>
                <li class="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}
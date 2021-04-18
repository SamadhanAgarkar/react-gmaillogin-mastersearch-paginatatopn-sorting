import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import bgimg from "../../Assets/Images/bg-img.svg";


export const HomeComponent= ()=>{
    let history = useHistory();

    const responseGoogle = (response) => {
        console.log("responseGoogle>>>>>>>>>>>>>>", response);
        history.push("/product");
    }

    const responseFailureGoogle = (response) => {
        console.log("responseFailureGoogle>>>>>>>>>>>>>>", response);
    }
    return(
        <>
        <div className="main-div">
            <div class="container">
                <div class="col-12">
                    <div className="div-middle">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        <GoogleLogin
                            clientId="1070231463061-k69nlfpcf4a59dpt7vqv7rq7pgjq1gvk.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseFailureGoogle}
                            className="signin-btn mt-30"
                        />
                    </div>
                    <div className="bg_image" style={{backgroundImage: 'url('+bgimg+')',height: "100vh",}}>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
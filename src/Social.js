function Account(props) {
    return (
        <div className="panel">
            <img src={props.applicant.profile_picture} alt="profile" />
            <p>Full Name: {props.applicant.full_name}</p>
            <p>Email: {props.applicant.email}</p>
            <p>Followers: {props.applicant.followers}</p>
        </div>
    )
}

function Social() {
    const applicants = [{"id":1,"username":"tpimblett0","full_name":"Tuckie Pimblett","email":"tpimblett0@ow.ly","followers":562924,"profile_picture":"https://robohash.org/commodiofficiaqui.png?size=50x50&set=set1"},
    {"id":2,"username":"twarbrick1","full_name":"Twila Warbrick","email":"twarbrick1@economist.com","followers":763740,"profile_picture":"https://robohash.org/quasiquaeratrem.png?size=50x50&set=set1"},
    {"id":3,"username":"pcaberas2","full_name":"Phillipe Caberas","email":"pcaberas2@typepad.com","followers":742765,"profile_picture":"https://robohash.org/etbeataecommodi.png?size=50x50&set=set1"},
    {"id":4,"username":"slansly3","full_name":"Shayne Lansly","email":"slansly3@comsenz.com","followers":824619,"profile_picture":"https://robohash.org/eumsuscipitassumenda.png?size=50x50&set=set1"},
    {"id":5,"username":"gkleyn4","full_name":"Gisela Kleyn","email":"gkleyn4@msn.com","followers":396847,"profile_picture":"https://robohash.org/doloresestsed.png?size=50x50&set=set1"},
    {"id":6,"username":"rcasey5","full_name":"Randy Casey","email":"rcasey5@nba.com","followers":158303,"profile_picture":"https://robohash.org/undeestneque.png?size=50x50&set=set1"},
    {"id":7,"username":"ssivorn6","full_name":"Sam Sivorn","email":"ssivorn6@home.pl","followers":604638,"profile_picture":"https://robohash.org/iustonisinon.png?size=50x50&set=set1"},
    {"id":8,"username":"arosenboim7","full_name":"Alvin Rosenboim","email":"arosenboim7@globo.com","followers":244218,"profile_picture":"https://robohash.org/enimtemporeveniam.png?size=50x50&set=set1"}]

    return(
        <>
            <h1>Assignment 3 </h1>
            <h1>SocialTracker</h1>
            <ul>
                {applicants.map((applicant) => <Account key={applicant.id} applicant={applicant} />)}
            </ul>
        </>
    )
}

export default Social;
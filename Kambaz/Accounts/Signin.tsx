import * as client from "./client";
export default function Signin() {
const [credentials, setCredentials] = useState<any>({});
const dispatch = useDispatch();
const navigate = useNavigate();
const signin = async () => {
const user = await client.signin(credentials);
if (!user) return;
dispatch(setCurrentUser(user));
navigate("/Kambaz/Dashboard");
};
return ( ... );
}

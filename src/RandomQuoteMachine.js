import "./RandomQuoteMachine.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";
const data = [
	{
		text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
		author: "Thomas Edison, type.fit",
	},
	{
		text: "You can observe a lot just by watching.",
		author: "Yogi Berra, type.fit",
	},
	{
		text: "A house divided against itself cannot stand.",
		author: "Abraham Lincoln, type.fit",
	},
	{
		text: "Difficulties increase the nearer we get to the goal.",
		author: "Johann Wolfgang von Goethe, type.fit",
	},
	{
		text: "Fate is in your hands and no one elses",
		author: "Byron Pulsifer, type.fit",
	},
	{
		text: "Be the chief but never the lord.",
		author: "Lao Tzu, type.fit",
	},
	{
		text: "Nothing happens unless first we dream.",
		author: "Carl Sandburg, type.fit",
	},
	{
		text: "Well begun is half done.",
		author: "Aristotle, type.fit",
	},
	{
		text: "Life is a learning experience, only if you learn.",
		author: "Yogi Berra",
	},
	{
		text: "Self-complacency is fatal to progress.",
		author: "Margaret Sangster, type.fit",
	},
	{
		text: "Peace comes from within. Do not seek it without.",
		author: "Buddha, type.fit",
	},
	{
		text: "What you give is what you get.",
		author: "Byron Pulsifer, type.fit",
	},
	{
		text: "We can only learn to love by loving.",
		author: "Iris Murdoch, type.fit",
	},
	{
		text: "Life is change. Growth is optional. Choose wisely.",
		author: "Karen Clark, type.fit",
	},
	{
		text: "You'll see it when you believe it.",
		author: "Wayne Dyer, type.fit",
	},
	{
		text: "Today is the tomorrow we worried about yesterday.",
		author: "type.fit",
	},
];

const colors = [
	"#ffbf00",
	"#ffff00",
	"#bfff00",
	"#80ff00",
	"#40ff00",
	"#00ff00",
	"#00ff40",
	"#00ff80",
	"#00ffbf",
	"#00ffff",
	"#00bfff",
	"#0080ff",
	"#0040ff",
	"#0000ff",
	"#4000ff",
	"#8000ff",
	"#bf00ff",
	"#ff00ff",
	"#ff00bf",
	"#ff0080",
];
let render0 = 0;
// console.log(results);
const RandomQuoteMachine = () => {
	const [quote, setQuote] = useState(Math.floor(Math.random() * data.length));
	const [color1, setColor1] = useState(
		Math.floor(Math.random() * colors.length)
	);

	const [styleafter, setStyleafter] = useState({
		style1: {
			color: colors[color1],
			visibility: "visible",
			transition: "visibility 0.5s ease-out 0s, color 1s ease-out 0s",
		},
		style2: {
			backgroundColor: colors[color1],
			transition: "background-color 1s ease-out 0s",
		},
	});
	const [styleb, setStyleb] = useState({
		display: "none",
		transition: "display 1s ease-out 0s",
	});

	if (render0 === 0) {
		setTimeout(() => {
			setColor1(Math.floor(Math.random() * colors.length));
			setStyleb({
				...styleb,
				display: "inline",
			});
		}, 1000);
		render0++;
	}

	// console.log(colorStyles.style1.color);
	const handleClick = () => {
		setColor1(Math.floor(Math.random() * colors.length));
		setStyleafter({
			...styleafter,
			style1: {
				...styleafter.style1,
				visibility: "hidden",
				color: colors[color1],
			},
			style2: {
				...styleafter.style2,
				backgroundColor: colors[color1],
			},
		});

		setTimeout(() => {
			setQuote(Math.floor(Math.random() * data.length));
			setColor1(Math.floor(Math.random() * colors.length));
			setStyleafter({
				...styleafter,
				style1: {
					...styleafter.style1,
					visibility: "visible",
					color: colors[color1],
				},
				style2: {
					...styleafter.style2,
					backgroundColor: colors[color1],
				},
			});
		}, 1000);
	};

	const tool = (msg) => (props) => <Tooltip {...props}>{msg}</Tooltip>;

	return (
		<div id="main-content" style={styleafter.style2}>
			<div id="quote-box">
				{/* <div id="content"> */}
				<div id="text" style={styleafter.style1}>
					<i className="bi bi-quote"></i>
					<span style={styleb}>{data[quote].text}</span>
				</div>
				<p id="author" style={styleafter.style1}>
					<i className="bi bi-dash"></i>{" "}
					<span style={styleb}>
						{data[quote].author.replace(", type.fit", "") === "type.fit"
							? "Unknown"
							: data[quote].author.replace(", type.fit", "")}
					</span>
				</p>
				{/* </div> */}
				<div id="connectTo">
					<a
						id="tweet-quote"
						href="https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22I%E2%80%99ve+missed+more+than+9000+shots+in+my+career.+I%E2%80%99ve+lost+almost+300+games.+26+times+I%E2%80%99ve+been+trusted+to+take+the+game+winning+shot+and+missed.+I%E2%80%99ve+failed+over+and+over+and+over+again+in+my+life.+And+that+is+why+I+succeed.%22+Michael+Jordan"
						target="_blank"
						rel="noreferrer"
						style={styleafter.style2}>
						<OverlayTrigger
							placement="bottom"
							delay={{ show: 250, hide: 400 }}
							overlay={tool("Tweet this quote!")}>
							<FontAwesomeIcon
								icon={faTwitter}
								id="x-icon"
								className="border border-0"
							/>
						</OverlayTrigger>
					</a>

					<a
						id="tweet-quote"
						href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DDalai%2BLama%26content%3DHappiness%2Bis%2Bnot%2Bsomething%2Breadymade.%2B%2BIt%2Bcomes%2Bfrom%2Byour%2Bown%2Bactions.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
						rel="noreferrer"
						target="_blank"
						style={styleafter.style2}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tool("Post this quote on tumblr!")}>
							<FontAwesomeIcon
								icon={faTumblr}
								id="tum-icon"
								className="border border-0"
							/>
						</OverlayTrigger>
					</a>

					<button
						id="new-quote"
						type="button"
						className="border border-0"
						onClick={handleClick}
						style={styleafter.style2}>
						New Quote
					</button>
				</div>
			</div>
			<h3 id="designer">
				<span className="fs-6">Coded by</span>{" "}
				<a href="https://codepen.io/hmimid92" rel="noreferrer" target="_blank">
					Ahmed Hmimid
				</a>
			</h3>
		</div>
	);
};

export default RandomQuoteMachine;

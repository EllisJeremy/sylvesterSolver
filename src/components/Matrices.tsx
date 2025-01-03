
import {CreateMatrixA} from "./subComponents/MatrixCreator.tsx"




export default function Matrices() {
	return(
    <>
			<div className = "full-matrix-div">

			{/* Matrix A */}

			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						A =
					</div>
					
					<div className="dynamic-matrix-div"> 
						
					  {/* Dynamic part */}
            <CreateMatrixA />
						
						
					</div>
				</div>
			</div>



			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						B =
					</div>

					<div className="dynamic-matrix-div"> 
						{/* Dynamic part */}
						
						
						
						
						
					</div>
				</div>
			</div>




			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						C =
					</div>

					<div className="dynamic-matrix-div"> 
						{/* Dynamic part */}
						
						
						
						
					</div>
				</div>
			</div>

			<div className = "matrix-div">

				<div className="matrix-flex-div">

					<div className = "variable-div">
						X =
					</div>

					<div className="dynamic-matrix-div"> 
						{/* Dynamic part */}
						
						
						
						
					</div>
				</div>
			</div>

			</div>

			<button className = "compute-button" id = "compute"> Compute <span className="tnr2">X</span></button>
		</>
	);
}


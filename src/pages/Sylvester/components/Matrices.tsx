import {CreateMatrixA, CreateMatrixB, CreateMatrixC, CreateMatrixX} from "./subComponents/MatrixCreator.tsx"
import { inputsStore } from "../store"




export default function Matrices() {

	const {n, m,} = inputsStore();
	

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
							<CreateMatrixA n = {n} />
							
							
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
							<CreateMatrixB m = {m} />
							
							
							
							
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
							<CreateMatrixC n = {n} m = {m} />
							
							
							
						</div>
					</div>
				</div>



				{/*Last part is for the matrix value outputs */}



				<div className = "matrix-div">

					<div className="matrix-flex-div">

						<div className = "variable-div">
							X =
						</div>

						<div className="dynamic-matrix-div"> 
							{/* Dynamic part */}
							<CreateMatrixX  n = {n} m = {m}/>
							
							
							
						</div>
					</div>
				</div>

			</div>

			
		</>
	);
}


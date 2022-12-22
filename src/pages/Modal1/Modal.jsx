import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <div className='modal'>
        {/* Modal container */}
        <div className='containers'>
            {/* payment col */}
            <div className='col1'>
                <h3>Payment</h3>
                <p>Choose your payment method from the
                     available list
                </p>
                {/* transfer card */}
                <div className='col1_sub2 transfer_col '>
                    <div>
                        <svg width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.5333 6.46667C27.5962 5.52957 26.3253 5.00311 25 5.00311C23.6747 5.00311 22.4038 5.52957 21.4667 6.46667C20.5296 7.40376 20.0031 8.67474 20.0031 10C20.0031 11.3253 20.5296 12.5962 21.4667 13.5333C21.9307 13.9973 22.4815 14.3654 23.0878 14.6165C23.694 14.8676 24.3438 14.9969 25 14.9969C25.6562 14.9969 26.306 14.8676 26.9122 14.6165C27.5185 14.3654 28.0693 13.9973 28.5333 13.5333C28.9973 13.0693 29.3654 12.5185 29.6165 11.9122C29.8676 11.306 29.9969 10.6562 29.9969 10C29.9969 9.3438 29.8676 8.69402 29.6165 8.08777C29.3654 7.48152 28.9973 6.93067 28.5333 6.46667M11.6667 0V20H38.3333V0H11.6667ZM35 13.3333C34.1167 13.3333 33.2667 13.6833 32.65 14.3167C32.0167 14.9333 31.6667 15.7833 31.6667 16.6667H18.3333C18.3333 15.7833 17.9833 14.9333 17.35 14.3167C16.7333 13.6833 15.8833 13.3333 15 13.3333V6.66667C15.8833 6.66667 16.7333 6.31667 17.35 5.68333C17.9833 5.06667 18.3333 4.21667 18.3333 3.33333H31.6667C31.6667 4.21667 32.0167 5.06667 32.65 5.68333C33.2667 6.31667 34.1167 6.66667 35 6.66667V13.3333ZM8.33333 3.33333H5C4.08333 3.33333 3.33333 2.58333 3.33333 1.66667C3.33333 0.75 4.08333 0 5 0H8.33333V3.33333ZM8.33333 11.6667H3.33333C2.41667 11.6667 1.66667 10.9167 1.66667 10C1.66667 9.08333 2.41667 8.33333 3.33333 8.33333H8.33333V11.6667ZM8.33333 20H1.66667C0.746667 20 0 19.25 0 18.3333C0 17.4167 0.746667 16.6667 1.66667 16.6667H8.33333V20Z" fill="#090909"/>
                        </svg>

                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM15.5352 7.57109L10.5992 14.4148C10.5302 14.5111 10.4393 14.5896 10.3339 14.6437C10.2286 14.6978 10.1118 14.7261 9.99336 14.7261C9.87491 14.7261 9.75816 14.6978 9.6528 14.6437C9.54743 14.5896 9.45649 14.5111 9.3875 14.4148L6.46484 10.3648C6.37578 10.2406 6.46484 10.0672 6.61719 10.0672H7.71641C7.95547 10.0672 8.18281 10.182 8.32344 10.3789L9.99219 12.6945L13.6766 7.58516C13.8172 7.39062 14.0422 7.27344 14.2836 7.27344H15.3828C15.5352 7.27344 15.6242 7.44688 15.5352 7.57109Z" fill="#2357D1"/>
                        </svg>

                    </div>
                    <h3>Pay by transfer</h3>
                    <p>Make transfer from your local bank</p>

                </div>

                {/* Agent Pay */}
                <div className='col1_sub2 Agent_col'>
                    <div>
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.4 40C1.76348 40 1.15303 39.7471 0.702944 39.2971C0.252856 38.847 0 38.2365 0 37.6L0 9.42667C0 8.10167 1.075 7.02667 2.4 7.02667H5.24333C5.33333 7.02667 5.42 7.04833 5.495 7.08667L5.49167 7.085V0.28C5.49167 0.125 5.61667 0 5.77167 0H15.805C15.96 0 16.085 0.125 16.085 0.28V7.045C16.1286 7.03413 16.1734 7.02853 16.2183 7.02833H18.7433C20.0683 7.02833 21.1433 8.10333 21.1433 9.42833V16.1467C21.2186 16.11 21.3013 16.0911 21.385 16.0917H22.6467C22.9567 16.0917 23.2083 16.3433 23.2083 16.6533V31.2733C23.2083 31.4223 23.1492 31.5652 23.0438 31.6705C22.9385 31.7758 22.7956 31.835 22.6467 31.835H21.385C21.3001 31.8353 21.2162 31.8159 21.14 31.7783L21.1433 31.78V37.6C21.1433 38.2365 20.8905 38.847 20.4404 39.2971C19.9903 39.7471 19.3799 40 18.7433 40H2.4ZM14.6067 34.615V36.505C14.6071 36.5796 14.6369 36.651 14.6896 36.7037C14.7424 36.7564 14.8138 36.7862 14.8883 36.7867H17.1117C17.1862 36.7862 17.2576 36.7564 17.3104 36.7037C17.3631 36.651 17.3929 36.5796 17.3933 36.505V34.615C17.3929 34.5406 17.363 34.4694 17.3102 34.4169C17.2575 34.3644 17.1861 34.335 17.1117 34.335H14.885C14.8107 34.3354 14.7396 34.365 14.6869 34.4174C14.6342 34.4698 14.6042 34.5407 14.6033 34.615H14.6067ZM9.34667 34.615V36.505C9.3471 36.5796 9.37692 36.651 9.42965 36.7037C9.48238 36.7564 9.55377 36.7862 9.62833 36.7867H11.85C11.9246 36.7862 11.996 36.7564 12.0487 36.7037C12.1014 36.651 12.1312 36.5796 12.1317 36.505V34.615C12.1312 34.5406 12.1014 34.4694 12.0486 34.4169C11.9958 34.3644 11.9244 34.335 11.85 34.335H9.62667C9.55239 34.3354 9.48124 34.365 9.42856 34.4174C9.37588 34.4698 9.34587 34.5407 9.345 34.615H9.34667ZM4.08667 34.615V36.5067C4.08667 36.6617 4.21167 36.7867 4.36667 36.7867H6.59C6.66457 36.7862 6.73596 36.7564 6.78869 36.7037C6.84141 36.651 6.87123 36.5796 6.87167 36.505V34.615C6.87123 34.5406 6.84136 34.4694 6.78858 34.4169C6.73581 34.3644 6.66442 34.335 6.59 34.335H4.36667C4.29241 34.335 4.22119 34.3645 4.16868 34.417C4.11617 34.4695 4.08667 34.5407 4.08667 34.615V34.615ZM14.605 30.33V32.22C14.6054 32.2946 14.6353 32.366 14.688 32.4187C14.7407 32.4714 14.8121 32.5012 14.8867 32.5017H17.11C17.1846 32.5012 17.256 32.4714 17.3087 32.4187C17.3614 32.366 17.3912 32.2946 17.3917 32.22V30.3283C17.3917 30.2541 17.3622 30.1829 17.3097 30.1303C17.2571 30.0778 17.1859 30.0483 17.1117 30.0483H14.8833C14.8091 30.0483 14.7379 30.0778 14.6853 30.1303C14.6328 30.1829 14.6033 30.2541 14.6033 30.3283V30.33H14.605ZM9.345 30.33V32.22C9.34544 32.2946 9.37525 32.366 9.42798 32.4187C9.48071 32.4714 9.5521 32.5012 9.62667 32.5017H11.85C11.9246 32.5012 11.996 32.4714 12.0487 32.4187C12.1014 32.366 12.1312 32.2946 12.1317 32.22V30.3283C12.1317 30.2541 12.1022 30.1829 12.0497 30.1303C11.9971 30.0778 11.9259 30.0483 11.8517 30.0483H9.625C9.55074 30.0483 9.47952 30.0778 9.42701 30.1303C9.3745 30.1829 9.345 30.2541 9.345 30.3283V30.33ZM4.085 30.33V32.2217C4.085 32.3767 4.21 32.5017 4.365 32.5017H6.58833C6.6629 32.5012 6.73429 32.4714 6.78702 32.4187C6.83975 32.366 6.86956 32.2946 6.87 32.22V30.3283C6.87 30.2541 6.8405 30.1829 6.78799 30.1303C6.73548 30.0778 6.66426 30.0483 6.59 30.0483H4.365C4.29074 30.0483 4.21952 30.0778 4.16701 30.1303C4.1145 30.1829 4.085 30.2541 4.085 30.3283V30.33ZM14.6033 26.0433V27.935C14.6033 28.09 14.7283 28.215 14.8833 28.215H17.11C17.1843 28.215 17.2555 28.1855 17.308 28.133C17.3605 28.0805 17.39 28.0093 17.39 27.935V26.0433C17.3896 25.9689 17.3597 25.8977 17.3069 25.8452C17.2541 25.7928 17.1827 25.7633 17.1083 25.7633H14.885C14.8107 25.7638 14.7396 25.7934 14.6869 25.8457C14.6342 25.8981 14.6042 25.9691 14.6033 26.0433V26.0433ZM9.34333 26.0433V27.935C9.34333 28.09 9.46833 28.215 9.62333 28.215H11.85C11.9243 28.215 11.9955 28.1855 12.048 28.133C12.1005 28.0805 12.13 28.0093 12.13 27.935V26.0433C12.1296 25.9689 12.0997 25.8977 12.0469 25.8452C11.9941 25.7928 11.9227 25.7633 11.8483 25.7633H9.625C9.55072 25.7638 9.47958 25.7934 9.4269 25.8457C9.37421 25.8981 9.34421 25.9691 9.34333 26.0433V26.0433ZM4.08333 26.0433V27.935C4.08333 28.09 4.20833 28.215 4.36333 28.215H6.59C6.66426 28.215 6.73548 28.1855 6.78799 28.133C6.8405 28.0805 6.87 28.0093 6.87 27.935V26.0433C6.86956 25.9689 6.83969 25.8977 6.78691 25.8452C6.73414 25.7928 6.66275 25.7633 6.58833 25.7633H4.365C4.29074 25.7633 4.21952 25.7928 4.16701 25.8453C4.1145 25.8979 4.085 25.9691 4.085 26.0433H4.08333ZM3.73333 14.855V23.0417C3.73333 23.1967 3.85833 23.3217 4.01333 23.3217H16.95C17.0243 23.3217 17.0955 23.2922 17.148 23.2397C17.2005 23.1871 17.23 23.1159 17.23 23.0417V14.855C17.2296 14.7804 17.1997 14.709 17.147 14.6563C17.0943 14.6036 17.0229 14.5738 16.9483 14.5733H4.015C3.94043 14.5738 3.86904 14.6036 3.81632 14.6563C3.76359 14.709 3.73377 14.7804 3.73333 14.855V14.855ZM2.89333 10.385V12.3683C2.89333 12.8333 3.27 13.21 3.735 13.21H17.7333C17.9566 13.21 18.1706 13.1213 18.3285 12.9635C18.4863 12.8056 18.575 12.5916 18.575 12.3683V10.385C18.575 10.1618 18.4863 9.94769 18.3285 9.78985C18.1706 9.63201 17.9566 9.54333 17.7333 9.54333H16.0833V11.2267H16.8967V11.5233H4.57667V11.2267H5.11167C5.24686 11.2266 5.38006 11.1941 5.5 11.1317L5.495 11.1333V9.63667C5.37606 9.575 5.24398 9.54298 5.11 9.54333H3.73167C3.50873 9.54377 3.29508 9.63264 3.1376 9.79044C2.98011 9.94824 2.89167 10.1621 2.89167 10.385H2.89333Z" fill="#777B7D"/>
                    </svg>

                    </div>
                    <h3>Pay via Agent</h3>
                    <p>Pay cash to agent for online transaction</p>

                </div>



            </div>
            {/* detail col */}
            <div className='col2'>
                <div className='col2_sub1'>
                    <h3>Details</h3>
                    
                    <div className='nav'>
                        <div className='blue'></div>
                        <div className='plain'></div>
                        <div className='plain'></div>
                    </div>

                    <form>
                        <input  className='input' type='text' placeholder="Amount in Naira" />
                        <input className= 'input' type='text' placeholder="Amount in Naira" />

                    </form>
                    {/* <button>Next</button> */}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Modal
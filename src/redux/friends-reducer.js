let initialState = [
   {
      id: 1,
      firstName: "Михаил",
      lastName: "Горбачев",
      img:
         "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRtD8Rt4dOcNotQVv1NRj-6w",
   },
   {
      id: 2,
      firstName: "Мария",
      lastName: "Семенова",
      img:
         "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRWlSGblX1_1QRBvnp85UJSw",
   },
   {
      id: 3,
      firstName: "Дмитрий",
      lastName: "Дятлов",
      img:
         "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR8uOdKS9gpiAPnGAGovPPmw",
   },
]

const friendsReducer = (state = initialState, action) => {
   return state;
}

export default friendsReducer;
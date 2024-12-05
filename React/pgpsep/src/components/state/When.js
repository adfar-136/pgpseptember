import React, { useState } from 'react'
import "./style.css"
export default function When() {
    const [bgcolor,setBgcolor] = useState("white")
  return (
    <div style={{backgroundColor:bgcolor}}> 
        <h1 style={{color:"red",backgroundColor:"pink",fontSize:"12px"}}>ADfar Rasheed</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis ducimus molestias, tempore libero tempora dolor quo in. Nam error veniam non recusandae natus reiciendis dolorum corrupti ea sed numquam fuga, distinctio dolor praesentium blanditiis! Error temporibus accusantium aperiam commodi pariatur illum aspernatur ad tempore, necessitatibus corrupti, blanditiis itaque magnam delectus aliquam architecto quasi impedit non nobis vel placeat similique? Quaerat explicabo est quasi aspernatur vel natus iure autem mollitia optio accusamus, quae fuga praesentium adipisci qui aliquam laudantium maxime similique, sunt commodi aliquid porro minus? Unde assumenda maxime molestias ipsam fuga, dicta ipsum saepe repellendus rem, natus qui porro animi ullam minima. Aperiam necessitatibus consequatur ipsam dignissimos maiores assumenda. Tempore ex, vitae blanditiis qui expedita libero facilis animi error suscipit atque praesentium possimus porro ipsum rerum adipisci eius amet alias nulla perferendis soluta dolorum ut facere, itaque dicta? Doloribus natus quia minus doloremque facere deleniti cumque alias aut deserunt eligendi nemo minima, nulla consequuntur voluptates enim beatae totam nobis pariatur earum non! Laboriosam excepturi repellendus suscipit error reiciendis minus hic voluptate eius. Esse rem est praesentium hic, vero vel culpa repellat, eum saepe incidunt voluptate suscipit error exercitationem corporis deserunt quae, ducimus animi dolorum possimus dignissimos voluptas quidem. Consectetur!</p>
        <button onClick={()=>setBgcolor("red")}>Red</button>
        <button onClick={()=>setBgcolor("blue")}>Blue</button>
        <button onClick={()=>setBgcolor("yellow")}>Yellow</button>
    </div>
  )
}

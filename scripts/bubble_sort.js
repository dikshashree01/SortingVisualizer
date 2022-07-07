function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#ffcc29");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#ce1212");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#ce1212");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#ce1212");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#ce1212");//Height update
            }
            div_update(divs[j],div_sizes[j], "#00adb5");//Color update
        }
        div_update(divs[j],div_sizes[j], "#4aa96c");//Color update
    }
    div_update(divs[0],div_sizes[0], "#4aa96c");//Color update

    enable_buttons();
}
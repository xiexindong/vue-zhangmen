  /* eslint-disable */
import { Button } from 'element-ui'
function getColumn(vm){
  return [{
      prop:"date",
      label:"日期",
      width:"180"
      },
    {
      prop:"name",
      label:"姓名",
      width:"180"
    },
    {
      prop:"address",
      label:"地址",
      width:"180",
      render(h,data){
        let child = []
         const btn  =  h('el-button',{
          props:{
            type:"primary",
            size:"small"
          },
          on: {
            click: function(){
             return vm.deletehandle(data.props.row)
            },
            '&mouseenter':function(){
              console.log('2wwww')
              return vm.deletehandle(data.props.row)
            },
            'mouseleave':function(){
              console.log(2222)
            }
          },
         },'按钮')
         child.push(btn)
         child.push(h('el-tooltip', {
          props: {
            effect: 'dark',
            placement: 'bottom-start'
          }
        },
        [
          h('div', { slot: 'content' }, '该学生购买了秋季正价续报寒春优惠购课课程'),
          h('span', {
            style: {
              color: '#ED8C20',
              background: '#FFF0E0',
              padding: '0 5px',
              border: '1px solid currentColor',
              fontSize: '12px',
              borderRadius: '2px'
            }
          }, '惠')
        ]))
    
         
         return h('div',{},child)
      }
    },
  ]
}

export default getColumn
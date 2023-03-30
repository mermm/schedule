function addLog(type, message){
    var $log = $('<tr />');
    $log.append($('<th />').text(type));
    $log.append($('<td />').text(message ? JSON.stringify(message) : ''));
    $("#logs table").prepend($log);
}
$(function(){
    $("#logs").append('<table class="table">');
    var isDraggable = true;
    var isResizable = true;

    var $sc = $("#schedule").timeSchedule({
        startTime: "07:30", // schedule start time(HH:ii)
        endTime: "20:00",   // schedule end time(HH:ii)
        widthTime: 60 * 10,  // cell timestamp example 10 minutes
        timeLineY: 60,       // height(px)
        verticalScrollbar: 20,   // scrollbar (px)
        timeLineBorder: 2,   // border(top and bottom)
        bundleMoveWidth: 6,  // width to move all schedules to the right of the clicked time line cell
        draggable: false,
        resizable: false,
        resizableLeft: true,
        rows : { 
            '0' : {
            title : 'ИТМО',
            schedule:[
                {
                    start: '09:00',
                    end: '10:30',
                    text: 'Машинное обучение',
                    data: {
                    }
                },
                {
                    start: '9:30',
                    end: '11:00',
                    text: 'Управление инвестициями',
                    data: {
                    }
                }
            ]
        },
        '1' : {
            title : 'РУДН',
            schedule:[
                {
                    start: '08:00',
                    end: '09:30',
                    text: 'Лексикология',
                    data: {
                    }
                }
            ]
        }
    },
        onChange: function(node, data){
            addLog('onChange', data);
        },
        onInitRow: function(node, data){
            addLog('onInitRow', data);
        },
        onClick: function(node, data){
            addLog('onClick', data);
        },
        onAppendRow: function(node, data){
            addLog('onAppendRow', data);
        },
        onAppendSchedule: function(node, data){
            addLog('onAppendSchedule', data);
            if(data.data.class){
                node.addClass(data.data.class);
            }
            if(data.data.image){
                var $img = $('<div class="photo"><img></div>');
                $img.find('img').attr('src', data.data.image);
                node.prepend($img);
                node.addClass('sc_bar_photo');
            }
        },
        // onScheduleClick: function(node, time, timeline){
        //     var start = time;
        //     var end = $(this).timeSchedule('formatTime', $(this).timeSchedule('calcStringTime', time) + 3600);
        //     $(this).timeSchedule('addSchedule', timeline, {
        //         start: start,
        //         end: end,
        //         text:'Insert Schedule',
        //         data:{
        //             class: 'sc_bar_insert'
        //         }
        //     });
        //     addLog('onScheduleClick', time + ' ' + timeline);
        // },
    });

    var $sc = $("#schedule2").timeSchedule({
        startTime: "07:30", // schedule start time(HH:ii)
        endTime: "20:00",   // schedule end time(HH:ii)
        widthTime: 60 * 10,  // cell timestamp example 10 minutes
        timeLineY: 60,       // height(px)
        verticalScrollbar: 20,   // scrollbar (px)
        timeLineBorder: 2,   // border(top and bottom)
        bundleMoveWidth: 6,  // width to move all schedules to the right of the clicked time line cell
        draggable: false,
        resizable: false,
        resizableLeft: true,
        rows : { 
            '0' : {
            title : 'ИТМО',
            schedule:[
                {
                    start: '09:30',
                    end: '11:00',
                    text: 'Индустриальный интернет',
                    data: {
                        class: 'itmo_economy'
                    }
                },
                {
                    start: '12:00',
                    end: '13:30',
                    text: 'Управление инвестициями',
                    data: {
                        class: 'itmo_economy'
                    }
                }
            ]
        },
        '1' : {
            title : 'РУДН',
            schedule:[
                {
                    start: '08:00',
                    end: '09:30',
                    text: 'Практический аудит',
                    data: {
                        class: 'rudn_economy'
                    }
                },
                {
                    start: '11:30',
                    end: '13:00',
                    text: 'Управление изменениями',
                    data: {
                        class: 'rudn_worldeconomy'
                    }
                },
                {
                    start: '09:00',
                    end: '10:30',
                    text: 'Теоретическая грамматика',
                    data: {
                        class: 'rudn_lang'
                    }
                }
            ]
        }
    },
        onChange: function(node, data){
            addLog('onChange', data);
        },
        onInitRow: function(node, data){
            addLog('onInitRow', data);
        },
        onClick: function(node, data){
            addLog('onClick', data);
        },
        onAppendRow: function(node, data){
            addLog('onAppendRow', data);
        },
        onAppendSchedule: function(node, data){
            addLog('onAppendSchedule', data);
            if(data.data.class){
                node.addClass(data.data.class);
            }
            if(data.data.image){
                var $img = $('<div class="photo"><img></div>');
                $img.find('img').attr('src', data.data.image);
                node.prepend($img);
                node.addClass('sc_bar_photo');
            }
        },
        // onScheduleClick: function(node, time, timeline){
        //     var start = time;
        //     var end = $(this).timeSchedule('formatTime', $(this).timeSchedule('calcStringTime', time) + 3600);
        //     $(this).timeSchedule('addSchedule', timeline, {
        //         start: start,
        //         end: end,
        //         text:'Insert Schedule',
        //         data:{
        //             class: 'sc_bar_insert'
        //         }
        //     });
        //     addLog('onScheduleClick', time + ' ' + timeline);
        // },
    });
    
    
    
    
});
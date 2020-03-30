// The function must accept a non-negative integer. 
// If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

function formatDuration (seconds) {
  if (seconds === 0) return 'now'
  
  // fix day logic
  const minutes = seconds / 60
  const sec = Math.floor(seconds % 60)
  const min = Math.floor(minutes % 60)
  const hr = Math.floor(minutes / 60)
  const days = Math.floor(hr * 24)
  const years = Math.floor(days * 365)
  
  const eligible = [sec, min, hr, days, years].map(time => time !== 0 ? time : null)
  console.log(eligible)
  
  
  // fix building
  const s = getTimes(eligible[0], 'second')
  const m = getTimes(eligible[1], 'minute')
  const h = getTimes(eligible[2], 'hour')
  
  if(h && m && s) return `${h}, ${m} and ${s}`
  if(h && !m && !s) return `${h}`
  if(!h && m && !s) return `${m}`
  if(!h && !m && s) return `${s}`
  if(!h && m && s) return `${m} and ${s}`
}

const getTimes = (n, format) => {
  if(n !== null) {
    if(n === 1) {
      return `${n} ${format}`
    } else {
      return `${n} ${format}s`
    }
  }
  return ''
}

package dbDrive

import (
	"bytes"
	"compress/gzip"
	"crypto/md5"
	"crypto/rand"
	"encoding/base64"
	"encoding/binary"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"reflect"
	"regexp"
	"sort"
	"strconv"
	"time"
	"github.com/chain-zhang/pinyin"
)
type Int64Slice []int64
func (this Int64Slice) Len() int { return len(this) }
func (this Int64Slice) Swap(i, j int64){ this[i], this[j] = this[j], this[i] }
func (this Int64Slice) Less(i, j int64) bool { return this[i] < this[j] }



//生成32位md5字串
func GetMd5String(s string) string {
	h := md5.New()
	h.Write([]byte(s))
	return hex.EncodeToString(h.Sum(nil))
}
func CheckMap(mapdata map[string]interface{},key string)(bool){
	_,f:=mapdata[key]
	return f
}

func CheckMapType(mapdata map[string]interface{},key string,valuetype string)(bool){
	_,f:=mapdata[key]
	if !f{
		return false
	}
	if reflect.TypeOf(mapdata[key]).String()==valuetype {

		return true
	}
	return false
}

//生成Guid字串
func UniqueId() string {
	b := make([]byte,48)

	if _,err := io.ReadFull(rand.Reader,b); err != nil {
		return ""
	}
	return GetMd5String(base64.URLEncoding.EncodeToString(b))
}

func Daoxu(a Int64Slice)Int64Slice{
	sort.Slice(a, func(i, j int) bool { return a[i] > a[j] })

	return a
}

func Zhengxu(a Int64Slice)Int64Slice{
	sort.Slice(a, func(i, j int) bool { return a[i] < a[j] })

	return a
}
func Strtime2Int64(datetime string)(int64){
	//日期转化为时间戳
	timeLayout := "2006-01-02 15:04:05"  //转化所需模板
	loc, _ := time.LoadLocation("Local")    //获取时区
	tmp, _ := time.ParseInLocation(timeLayout, datetime, loc)
	timestamp := tmp.Unix()    //转化为时间戳 类型是int64
	return timestamp
}
func Strtime2Float64(datetime string)(float64){
	//日期转化为时间戳
	timeLayout := "2006-01-02 15:04:05"  //转化所需模板
	loc, _ := time.LoadLocation("Local")    //获取时区
	tmp, _ := time.ParseInLocation(timeLayout, datetime, loc)
	timestamp := tmp.Unix()    //转化为时间戳 类型是int64
	return float64(timestamp)
}
func Interface2Int64 (inte interface{})int64 {

	switch reflect.TypeOf(inte).Kind() {
	case reflect.Int:
		return int64(inte.(int))
	case reflect.Int64:
		return inte.(int64)
	case reflect.Int8:
		return int64(inte.(int))
	case reflect.Float64:
		return int64(inte.(float64))
	case reflect.Float32:
		return int64(inte.(float32))
	}
	return 0
}
func GMT()(string){
	//输出theTime 2015-01-01 15:15:00 +0800 CST
	toBeCharge := "2015-01-01 00:00:00"                             //待转化为时间戳的字符串 注意 这里的小时和分钟还要秒必须写 因为是跟着模板走的 修改模板的话也可以不写
	timeLayout := "2006-01-02 15:04:05"                             //转化所需模板
	loc, _ := time.LoadLocation("Local")                            //重要：获取时区
	theTime, _ := time.ParseInLocation(timeLayout, toBeCharge, loc) //使用模板在对应时区转化为time.time类型

	return theTime.String()
}
func Str2Int64(str string)int64{
	val, _ := strconv.ParseInt(str, 10, 64)
	return val
}
func Interface2Float64 (inte interface{})float64 {
	switch reflect.TypeOf(inte).Kind() {
	case reflect.Int:
		return float64(inte.(int))
	case reflect.Int64:
		return float64(inte.(int64))
	case reflect.Int8:
		return float64(inte.(int))
	case reflect.Float32:
		return float64(inte.(float32))
	case reflect.Float64:
		return inte.(float64)
	default:
		return float64(len(Strval(inte)))
	}

	return 0
}
func PinYin(new_othername string)(string){
	str, err := pinyin.New(new_othername).Split("").Mode(pinyin.InitialsInCapitals).Convert()
	if err != nil {
		// 错误处理
		Log("转换成拼音失败",new_othername)
	}else{
		new_othername=str
	}
	return new_othername
}

func Log(a ...interface{}){
	dd:=make([]interface{},0)
	dd=append(dd,Strtime())
	for _,k := range a {
		dd=append(dd,k)
	}
	fmt.Println(dd...)
}
func Strtime()string{
	return time.Now().Format("2006-01-02 15:04:05")
}
func StrtimeM()string{
	return time.Now().Format("2006-01-02 15:04:05.000")
}
func RemoveFromSlice(datas []int64,data int64)([]int64){

	new_data:=datas

	cur_index:=-1
	for index,v := range datas {
		if v==data {
			cur_index=index
		}
	}
	if cur_index>-1 {
		new_data = append(new_data[:cur_index], new_data[cur_index+1:]...)
	}
	return new_data
}
func BytesToIntLittle(bys []byte) int32 {
	bytebuff := bytes.NewBuffer(bys)
	var data int32
	binary.Read(bytebuff, binary.LittleEndian, &data)
	return int32(data)
}
func Map2JSON(map0 map[string]interface{})(string){
	dataType , _ := json.Marshal(map0)
	dataString := string(dataType)
	return dataString
}
func RegReplace(allstr string,regstr string,newstr string)(string){
	re3, _ := regexp.Compile(regstr);
	rep := re3.ReplaceAllString(allstr, newstr);
	return rep
}
func Arr2JSON(map0 []map[string]interface{})(string){
	dataType , _ := json.Marshal(map0)
	dataString := string(dataType)
	return dataString
}
func JSON2SliceStr(str string) []string {
	var tempMap []string
	err := json.Unmarshal([]byte(str), &tempMap)
	if err != nil {

	}
	return tempMap
}
func JSON2Slice(str string) []map[string]interface{} {
	var tempMap []map[string]interface{}
	err := json.Unmarshal([]byte(str), &tempMap)
	if err != nil {

	}
	return tempMap
}
func JSON2Map(str string) map[string]interface{} {
	var tempMap map[string]interface{}
	err := json.Unmarshal([]byte(str), &tempMap)
	if err != nil {

	}
	return tempMap
}
func RegFindAll(reg string,str string)([]string){
	re2, _ := regexp.Compile(reg);
	all:=re2.FindAllStringSubmatch(str,-1)

	ddd:=make([]string,0)
	if len(all)>0 {
		ddd=all[0]
	}

	return ddd
}


func BytesCombine(pBytes ...[]byte) []byte {
	return bytes.Join(pBytes, []byte(""))
}
func PackBytes(buf []byte)([]byte){

	var len_b int32
	len_b = int32(len(buf))
	bytesBuffer := bytes.NewBuffer([]byte{})
	binary.Write(bytesBuffer, binary.LittleEndian, &len_b)
	d:=bytesBuffer.Bytes()
	return BytesCombine(d,buf)
}
/*
interface 转字符串
 主要用来转换map中的空接口
*/
func Strval(value interface{}) string {
	var key string
	if value == nil {
		return key
	}
	switch value.(type) {
	case float64:
		ft := value.(float64)
		key = strconv.FormatFloat(ft, 'f', -1, 64)
	case float32:
		ft := value.(float32)
		key = strconv.FormatFloat(float64(ft), 'f', -1, 64)
	case int:
		it := value.(int)
		key = strconv.Itoa(it)
	case uint:
		it := value.(uint)
		key = strconv.Itoa(int(it))
	case int8:
		it := value.(int8)
		key = strconv.Itoa(int(it))
	case uint8:
		it := value.(uint8)
		key = strconv.Itoa(int(it))
	case int16:
		it := value.(int16)
		key = strconv.Itoa(int(it))
	case uint16:
		it := value.(uint16)
		key = strconv.Itoa(int(it))
	case int32:
		it := value.(int32)
		key = strconv.Itoa(int(it))
	case uint32:
		it := value.(uint32)
		key = strconv.Itoa(int(it))
	case int64:
		it := value.(int64)
		key = strconv.FormatInt(it, 10)
	case uint64:
		it := value.(uint64)
		key = strconv.FormatUint(it, 10)
	case string:
		key = value.(string)
	case []byte:
		key = string(value.([]byte))
	default:
		newValue, _ := json.Marshal(value)
		key = string(newValue)
	}

	return key
}
//整形转换成字节
func IntToBytes(n int,b byte) ([]byte,error) {
	switch b {
	case 1:
		tmp := int8(n)
		bytesBuffer := bytes.NewBuffer([]byte{})
		binary.Write(bytesBuffer, binary.BigEndian, &tmp)
		return bytesBuffer.Bytes(),nil
	case 2:
		tmp := int16(n)
		bytesBuffer := bytes.NewBuffer([]byte{})
		binary.Write(bytesBuffer, binary.BigEndian, &tmp)
		return bytesBuffer.Bytes(),nil
	case 3,4:
		tmp := int32(n)
		bytesBuffer := bytes.NewBuffer([]byte{})
		binary.Write(bytesBuffer, binary.BigEndian, &tmp)
		return bytesBuffer.Bytes(),nil
	}
	return nil,fmt.Errorf("IntToBytes b param is invaild")
}


func UngzipStr(str string)(string){

	var out bytes.Buffer
	encoded ,_:= base64.StdEncoding.DecodeString(str)
	ou1 :=bytes.NewBuffer(encoded)
	r, e := gzip.NewReader(ou1)
	if e!=nil {
		return str
	}
	io.Copy(&out, r)
	return out.String()
	//return b.Bytes()
}
func GzipStr(str string,level int)([]byte){
	var b bytes.Buffer
	gz,_:= gzip.NewWriterLevel(&b,level)
	if _, err := gz.Write([]byte(str)); err != nil {
		panic(err)
	}
	if err := gz.Flush(); err != nil {
		panic(err)
	}
	if err := gz.Close(); err != nil {
		panic(err)
	}
	encoded := base64.StdEncoding.EncodeToString(b.Bytes())
	return []byte(encoded)
	//return b.Bytes()
}